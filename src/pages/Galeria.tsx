import VideoSlider from '../components/layout/VideoSlider';
import './Galeria.css';

const Galeria = () => {
  return (
    <div className="galeria-page">
      <h1 className="galeria-title">Galería</h1>
      <div className="galeria-video-wrapper">
        <VideoSlider />
      </div>
    </div>
  );
};

export default Galeria;