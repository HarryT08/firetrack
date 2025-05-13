import ColombiaFiresMap from "../components/common/ColombiaFiresMap";
import BoletinSuscripcion from "../components/common/BoletinSuscripcion";

const Alertas = () => {
  return (
    <div className="page relative">
      <h1 className="title-background">Alertas</h1>

      {/* Mapa de incendios */}
      <ColombiaFiresMap />

      {/* Boletín flotante o al costado */}
      <BoletinSuscripcion />
    </div>
  );
};

export default Alertas;