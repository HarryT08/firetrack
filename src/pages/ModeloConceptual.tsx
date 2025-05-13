import "./ModeloConceptual.css";

const ModeloConceptual = () => {
  return (
    <div className="page">
      <h1 className="title-background">Modelo Conceptual</h1>
      <div className="modelo-conceptual">

        <div className="fila">
          <div className="caja izquierda color1">Condiciones Climáticas</div>
          <div className="linea"></div>
          <div className="caja derecha color2">
            <h4>Variables meteorológicas</h4>
            <ul>
              <li>Temperatura</li>
              <li>Humedad relativa</li>
              <li>Velocidad y dirección del viento</li>
              <li>Precipitaciones</li>
              <li>Estaciones meteorológicas / satélites</li>
            </ul>
          </div>
        </div>

        <div className="fila">
          <div className="caja izquierda color3">Combustible vegetal</div>
          <div className="linea"></div>
          <div className="caja derecha color4">
            <h4>Tipo y cantidad de material vegetal</h4>
            <ul>
              <li>Árboles y biomasa</li>
              <li>Contenido de humedad</li>
              <li>Hojarasca</li>
            </ul>
          </div>
        </div>

        <div className="fila">
          <div className="caja izquierda color5">Topografía</div>
          <div className="linea"></div>
          <div className="caja derecha color6">
            <h4>Características del terreno</h4>
            <ul>
              <li>Pendiente</li>
              <li>Altitud</li>
              <li>Orientación</li>
            </ul>
          </div>
        </div>

        <div className="fila">
          <div className="caja izquierda color7">Índices de Peligro</div>
          <div className="linea"></div>
          <div className="caja derecha color8">
            <h4>Evaluación compuesta</h4>
            <p>Se calculan a partir de la combinación de:</p>
            <ul>
              <li>Condiciones climáticas</li>
              <li>Combustible vegetal</li>
              <li>Relieve</li>
            </ul>
            <p><strong>Ejemplos:</strong> FWI, DSI, KBDL</p>
          </div>
        </div>

        <div className="fila">
          <div className="caja izquierda color9">Mapa de peligros</div>
          <div className="linea"></div>
          <div className="caja derecha color10">
            <h4>Resultados espaciales</h4>
            <ul>
              <li>Heatmap de puntos de calor (FIRMS)</li>
              <li>Zonas de alto riesgo</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModeloConceptual;