import VideoSlider from '../components/layout/VideoSlider';
import './Galeria.css';

const Galeria = () => {
  return (
    <div className="page">
      <h1 className="title-background">Galería</h1>
      <div className="galeria-video-wrapper">
        <VideoSlider />
      </div>
    </div>
  );
};

export default Galeria;