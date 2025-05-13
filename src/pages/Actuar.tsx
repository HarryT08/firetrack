import "./Actuar.css";

const fases = [
  {
    nombre: "ANTES (PREVENCIÓN Y PREPARACIÓN)",
    color: "fase-antes",
    items: [
      { texto: "Detección de riesgos: Identificación de zonas vulnerables.", icono: "📍" },
      { texto: "Capacitación y simulacros: Personal entrenado y preparado.", icono: "👨‍🚒" },
      { texto: "Plan de Contingencia Municipal: Definición de recursos, roles y estrategias.", icono: "📝" },
      { texto: "Monitoreo ambiental: Información climática y de alertas.", icono: "🌦️" },
      { texto: "Educación comunitaria: Sensibilización a la población.", icono: "📣" },
    ]
  },
  {
    nombre: "DURANTE (RESPUESTA)",
    color: "fase-durante",
    items: [
      { texto: "Detección y aviso: Cualquier persona o entidad informa sobre humo o llamas.", icono: "🚨" },
      { texto: "Verificación: La autoridad local confirma el incendio.", icono: "👮‍♂️" },
      { texto: "Activación de recursos: Movilización inmediata de bomberos y otras entidades.", icono: "🚒" },
      { texto: "Reconocimiento y evaluación inicial: Instalación del PMU.", icono: "📍" },
      { texto: "Protocolo Nacional de Respuesta ante Incendios Forestales", icono: "📋" },
      { texto: "Control del incendio: Aislamiento del fuego.", icono: "🔥" },
      { texto: "Liquidación del incendio: Eliminación de puntos calientes.", icono: "💧" },
      { texto: "Guardia de cenizas: Vigilancia para evitar reactivación.", icono: "👁️" },
    ]
  },
  {
    nombre: "DESPUÉS (EVALUACIÓN Y RECUPERACIÓN)",
    color: "fase-despues",
    items: [
      { texto: "Investigación: Determinar origen y causa del incendio.", icono: "🔍" },
      { texto: "Desmovilización y cierre: Entrega del área afectada.", icono: "📦" },
      { texto: "Reunión Post Incidente (RPI): Lecciones aprendidas.", icono: "📚" },
      { texto: "Evaluación ambiental: Realizada por las CAR.", icono: "🌱" },
      { texto: "Declaratoria de Calamidad: Si se excede la capacidad local o nacional.", icono: "⚠️" },
    ]
  },
];

const Actuar = () => {
  return (
    <div className="page">
      <h1 className="title-background">Actuar</h1>

      <div className="tabla-actuar">
        {fases.map((fase, idx) => (
          <div className={`fila ${fase.color}`} key={idx}>
            <div className="etiqueta">{fase.nombre}</div>
            <div className="contenedor-items">
              {fase.items.map((item, i) => (
                <div className="item" key={i}>
                  <div className="icono">{item.icono}</div>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actuar;