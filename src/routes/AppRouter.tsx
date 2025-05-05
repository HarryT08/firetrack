import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Inicio from '../pages/Inicio';
import Alertas from '../pages/Alertas';
import Causas from '../pages/Causas';
import Consecuencias from '../pages/Consecuencias';
import Actuar from '../pages/Actuar';
import DatosHistoricos from '../pages/DatosHistoricos';
import Galeria from '../pages/Galeria';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Inicio />} />
      <Route path="alertas" element={<Alertas />} />
      <Route path="causas" element={<Causas />} />
      <Route path="consecuencias" element={<Consecuencias />} />
      <Route path="actuar" element={<Actuar />} />
      <Route path="datos-historicos" element={<DatosHistoricos />} />
      <Route path="galeria" element={<Galeria />} />
    </Route>
  </Routes>
);

export default AppRouter;