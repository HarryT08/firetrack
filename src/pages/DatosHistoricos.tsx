import VerticalCard from "../components/common/HorizontalCard";
import "./DatosHistoricos.css";

const nacionalCards = [
  {
    title: "Incendios forestales: la mayoría provocados, pero hay pocas capturas",
    image: "/images/cucuta1.jpg",
    description:
      "Este año, unas 128.000 hectáreas han sido consumidas por el fuego en Colombia.",
    link: "https://www.eltiempo.com/vida/medio-ambiente/autoridades-en-colombia-reportan-mas-de-2-000-incendios-forestales-en-el-pais-413582"
  },
  {
    title: "Áreas afectadas por incendios forestales en Colombia se han duplicado en 2024",
    image: "/images/cucuta2.jpg",
    description:
      "Desde el 1 de enero a la fecha, Colombia ha registrado un total de 2.279 incendios forestales en 30 departamentos, afectando una superficie total de 137.459 hectáreas. El cambio de condiciones climáticas hacia un clima más seco y cálido propiciado por la variabilidad climática estaría contribuyendo significativamente al aumento de las áreas afectadas.",
    link: "https://www.elespectador.com/ambiente/areas-afectadas-por-incendios-forestales-se-han-duplicado-en-2024/"
  },
  {
    title: "Colombia: al menos 437 incendios diarios se presentaron en los bosques durante enero",
    image: "/images/cucuta3.jpg",
    description:
      "Datos de la Fundación para la Conservación y el Desarrollo Sostenible (FCDS) revelan que durante enero de 2023 se presentaron 437 incendios por día. Estos datos alarmantes solo marcan una tendencia preocupante, si se toman en cuenta las más de 630 alertas diarias que se presentaron en promedio durante enero de 2022 en la Amazonía, las cuales superaron las cifras para ese mes en los últimos 10 años.",
    link: "https://es.mongabay.com/2023/02/incendios-en-bosques-de-colombia-durante-enero/"
  },
];

const regionalCards = [
  {
    title: "Van 23 incendios en Norte de Santander",
    image: "/images/regional1.jpg",
    description:
      "Las entidades departamentales solicitarán apoyo a nivel nacional por las emergencias reportadas durante el fenómeno de El Niño en Norte de Santander.",
    link: "https://www.laopinion.co/region/van-23-incendios-en-norte-de-santander"
  },
  {
    title: "Incendio forestal arrasó con 40 hectáreas del páramo de Santurbán",
    image: "/images/regional2.jpg",
    description:
      "Las altas temperaturas y los fuertes vientos han incrementado el número de incendios en Norte de Santander. En el municipio de Mutiscua, durante dos días, las llamas consumieron vegetación del Páramo de Santurbán. Ya van más de 100 hectáreas incineradas en la Playa de Belén.",
    link: "https://www.eltiempo.com/colombia/otras-ciudades/incendios-forestales-en-norte-de-santander-485358"
  },
  {
    title: "Incendios forestales han arrasado más de 700 hectáreas en Norte de Santander",
    image: "/images/regional3.jpg",
    description:
      "Más de 119 incendios se han registrado hasta la fecha, los cuales han afectado en su mayoría a bosques y vegetación virgen.",
    link: "https://www.laopinion.co/region/incendios-forestales-han-arrasado-mas-de-700-hectareas-en-norte-de-santander"
  },
];

const localCards = [
  {
    title: "Sigue activo gigantesco incendio en zona forestal de Cúcuta",
    image: "/images/local1.jpg",
    description:
      "Las autoridades confirmaron que la conflagración inició sobre la tarde del lunes 12 de agosto de 2024, por lo que el equipo de Bomberos se desplazó hasta el sitio para atender la emergencia. No obstante, los organismos de socorro señalaron que las llamas se presentan en una zona de difícil acceso.",
    link: "https://www.infobae.com/colombia/2024/08/13/mas-de-15-horas-lleva-activo-un-gran-incendio-en-zona-forestal-de-cucuta/"
  },
  {
    title: "Treinta hectáreas de bosque seco consumió incendio en el Carmen de Tonchalá",
    image: "/images/local2.jpg",
    description:
      "Un incendio forestal de considerables proporciones se desató en la zona rural de Cúcuta desde la tarde del pasado lunes y generó una emergencia ambiental, que convocó los esfuerzos del Cuerpo de Bomberos, y funcionarios de la Unidad de Gestión de Riesgo de la ciudad para extinguir las llamas.",
    link: "https://www.laopinion.co/cucuta/treinta-hectareas-de-bosque-seco-consumio-incendio-en-el-carmen-de-tonchala"
  },
  {
    title: "CATORCE INCENDIOS SE HAN REGISTRADO EN CÚCUTA EN LO CORRIDO DEL AÑO",
    image: "/images/local3.jpg",
    description:
      "En el municipio se han presentado incendios forestales y estructurales; en su mayoría, los forestales tienen que ver con las quemas que realiza la comunidad en zonas con cobertura vegetal y con acumulación de residuos sólidos. En las viviendas, las situaciones que nos han reportado tienen que ver con cortocircuitos que se dan en la mismas, por eso las recomendaciones del alcalde Yáñez hacen énfasis en que la comunidad evite este tipo de acciones y verifique muy bien las instalaciones eléctricas para evitar situaciones de emergencia”, manifestó Huber Plaza Villamizar, secretario de Gestión del Riesgo.",
    link: "https://cucuta.gov.co/catorce-incendios-se-han-registrado-en-cucuta-en-lo-corrido-del-ano"
  },
];

const DatosHistoricos = () => {
  return (
    <div className="page">
      <h1 className="title-background">Noticias recientes</h1>

      <h2 className="section-title">Nacional</h2>
      <div className="horizontal-card-grid">
        {nacionalCards.map((card, index) => (
          <VerticalCard
            key={`nacional-${index}`}
            title={card.title}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>

      <h2 className="section-title">Regional</h2>
      <div className="horizontal-card-grid">
        {regionalCards.map((card, index) => (
          <VerticalCard
            key={`regional-${index}`}
            title={card.title}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>

      <h2 className="section-title">Local</h2>
      <div className="horizontal-card-grid">
        {localCards.map((card, index) => (
          <VerticalCard
            key={`local-${index}`}
            title={card.title}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>

  );
};

export default DatosHistoricos;