import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Papa from "papaparse";
import "mapbox-gl/dist/mapbox-gl.css";
import "./ColombiaFiresMap.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || "";

const ColombiaFiresMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const FIRMS_URL =
    "https://firms.modaps.eosdis.nasa.gov/api/country/csv/f0830db72767f3e6e5b9f11c00aacff0/VIIRS_SNPP_NRT/COL/1";

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-74, 4.5],
      zoom: 5.5, // Aumentado ligeramente
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    fetch(FIRMS_URL)
      .then((res) => res.text())
      .then((csv) => {
        const result = Papa.parse(csv, { header: true });

        const features = result.data
          .filter((row: any) => row.latitude && row.longitude)
          .map((row: any) => {
            const lat = parseFloat(row.latitude);
            const lon = parseFloat(row.longitude);

            if (isNaN(lat) || isNaN(lon)) return null;

            return {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [lon, lat],
              },
              properties: {
                fecha: row.acq_date,
                hora: row.acq_time,
                brillo: row.bright_ti4,
                confianza: row.confidence,
                satelite: row.satellite,
                instrumento: row.instrument,
                frp: row.frp,
                dia_noche: row.daynight,
              },
            };
          })
          .filter((f: any) => f !== null);

        map.current!.on("load", () => {
          map.current!.addSource("incendios", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features,
            },
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
          });

          // Clusters
          map.current!.addLayer({
            id: "clusters",
            type: "circle",
            source: "incendios",
            filter: ["has", "point_count"],
            paint: {
              "circle-color": "#f59e0b",
              "circle-radius": ["step", ["get", "point_count"], 18, 10, 24, 50, 30],
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff",
            },
          });

          // Cluster count labels
          map.current!.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "incendios",
            filter: ["has", "point_count"],
            layout: {
              "text-field": "{point_count_abbreviated}",
              "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
              "text-size": 12,
            },
          });

          // Unclustered points
          map.current!.addLayer({
            id: "unclustered-point",
            type: "circle",
            source: "incendios",
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-radius": 6,
              "circle-color": "#e11d48",
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff",
            },
          });

          // Popup on unclustered points
          map.current!.on("click", "unclustered-point", (e) => {
            const props = e.features?.[0].properties;
            if (!props) return;

            new mapboxgl.Popup({ className: "popup-incendio" })
              .setLngLat(e.lngLat)
              .setHTML(`
                <strong>🔥 Incendio detectado</strong><br/>
                <b>Fecha:</b> ${props.fecha}<br/>
                <b>Hora:</b> ${props.hora}<br/>
                <b>Brillo:</b> ${props.brillo} K<br/>
                <b>Confianza:</b> ${props.confianza}<br/>
                <b>Satélite:</b> ${props.satelite}<br/>
                <b>Instrumento:</b> ${props.instrumento}<br/>
                <b>FRP:</b> ${props.frp}<br/>
                <b>Día/Noche:</b> ${props.dia_noche}
              `)
              .addTo(map.current!);
          });

          // Expandir cluster al hacer click
          map.current!.on("click", "clusters", (e) => {
            const feature = e.features?.[0];
            if (!feature) return;

            const clusterId = feature.properties?.cluster_id;
            if (typeof clusterId !== "number") return; // 👈 clave


            const source = map.current!.getSource("incendios") as mapboxgl.GeoJSONSource;

            source.getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err || !map.current) return;

              map.current.easeTo({
                center: (feature.geometry as any).coordinates,
                zoom,
              });
            });

          });

          map.current!.on("mouseenter", "clusters", () => {
            map.current!.getCanvas().style.cursor = "pointer";
          });

          map.current!.on("mouseleave", "clusters", () => {
            map.current!.getCanvas().style.cursor = "";
          });

          map.current!.on("mouseenter", "unclustered-point", () => {
            map.current!.getCanvas().style.cursor = "pointer";
          });

          map.current!.on("mouseleave", "unclustered-point", () => {
            map.current!.getCanvas().style.cursor = "";
          });
        });
      });
  }, []);

  return <div ref={mapContainer} className="mapbox-container" />;
};

export default ColombiaFiresMap;