import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Papa from "papaparse";
import "mapbox-gl/dist/mapbox-gl.css";
import "./ColombiaFiresMap.css";
import type { Feature, Point } from "geojson";

// Define el tipo exacto de las propiedades de cada punto de incendio
type IncendioProperties = {
  fecha: string;
  hora: string;
  brillo: string;
  confianza: string;
  satelite: string;
  instrumento: string;
  frp: string;
  dia_noche: string;
};

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
      zoom: 5.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", async () => {
      try {
        const res = await fetch(FIRMS_URL);
        const csv = await res.text();
        const result = Papa.parse(csv, { header: true });

        const features: Feature<Point, IncendioProperties>[] = result.data
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
          .filter((f): f is Feature<Point, IncendioProperties> => f !== null);

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

        map.current!.on("click", "unclustered-point", (e) => {
          const props = e.features?.[0].properties as IncendioProperties;
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

        map.current!.on("click", "clusters", (e) => {
          const feature = e.features?.[0];
          if (!feature) return;

          const clusterId = feature.properties?.cluster_id;
          if (typeof clusterId !== "number") return;

          const source = map.current!.getSource("incendios") as mapboxgl.GeoJSONSource;

          source.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err || !map.current) return;
            map.current!.easeTo({
              center: (feature.geometry as any).coordinates,
              zoom: zoom as number,
            });
          });
        });

        ["clusters", "unclustered-point"].forEach((layer) => {
          map.current!.on("mouseenter", layer, () => {
            map.current!.getCanvas().style.cursor = "pointer";
          });
          map.current!.on("mouseleave", layer, () => {
            map.current!.getCanvas().style.cursor = "";
          });
        });
      } catch (err) {
        console.error("Error al cargar incendios:", err);
      }
    });
  }, []);


  return <div ref={mapContainer} className="mapbox-container" />;
};

export default ColombiaFiresMap;