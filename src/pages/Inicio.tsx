import CardFlip from "../components/common/CardFlip";
import "./Inicio.css";

const vegetationCards = [
  {
    title: "Incendios Superficiales",
    image: "https://extintoresguadalajara.com/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-13-a-las-12.52.05.png",
    description:
      "El fuego se propaga por la superficie del suelo, quemando musgos y líquenes, mientras que los árboles permanecen intactos. La velocidad de propagación de incendios de superficie menos intensos alcanza 1 m/h, los más intensos superan 3 m/h.",
  },
  {
    title: "Incendio de Copas",
    image: "https://extintoresguadalajara.com/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-13-a-las-12.54.53-480x320.png",
    description:
      "El fuego consume todo el bosque. La velocidad de propagación de un incendio de copas menos intenso alcanza 3 m/min, los más intensos superan los 100 m/min.",
  },
  {
    title: "Incendio de Suelos",
    image: "https://cdn.portalfruticola.com/2023/02/media-works-II-90-1024x663.png",
    description:
      "La profundidad de combustión de un incendio de suelo poco intenso alcanza 25 cm, mientras que los más intensos superan los 50 cm.",
  },
];

const propagationCards = [
  {
    title: "Incendio topográfico",
    image: "https://www.tendencias21.es/photo/art/default/8026113-12495128.jpg?v=1436958945",
    description: "Incendio forestal que presenta un comportamiento generado por la pendiente del relieve y el calentamiento de la vegetación del terreno.",
  },
  {
    title: "Incendio de viento",
    image: "https://blog.meteoclim.com/wp-content/uploads/2022/02/IncendiosViento1.png",
    description: "Cuyo motor de propagación es el viento, la intensidad y la dirección, durante el periodo que este ocurre.",
  },
  {
    title: "Incendio convectivo",
    image: "https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/las-matematicas-ayudaran-a-predecir-el-tipo-de-incendio-en-cada-paisaje/5453833-1-esl-MX/Las-matematicas-ayudaran-a-predecir-el-tipo-de-incendio-en-cada-paisaje.jpg",
    description: "Se caracteriza por ser incendios cuyo factor de prograpación es la gran acumulación de combustible (vegetación)."
  }
]


const Inicio = () => {
  return (
    <div className="page">
      <h1 className="title-background">Inicio</h1>

      <p className="descripcion">
        El término "incendios forestales" se refiere a los fuegos no controlados (sean de origen natural o antrópico)
        que ocurren en los ecosistemas terrestres, y que se propagan por la vegetación, sea esta del tipo que sea
        (bosque, sabana, matorral, pastizal, humedal, turbera, etc.). <a href="https://www.uv.es/jgpausas/incendios.html">Pausas, J. G. (s. f.). Libro: Incendios forestales.</a>
      </p>

      <div className="body">
        <h2 className="title">Según su vegetación</h2>
        <div className="feature-grid">
          {vegetationCards.map((card, index) => (
            <CardFlip
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>

        <h2 className="title">Según su propagación</h2>
        <div className="feature-grid padding-bottom">
          {propagationCards.map((card, index) => (
            <CardFlip
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio