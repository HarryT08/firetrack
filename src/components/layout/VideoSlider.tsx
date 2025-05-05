import { useState } from 'react';
import './VideoSlider.css';

const videoUrls = [
  'https://youtu.be/3KMv8casJuY?si=vOWMKxqNfjsGlt0h',
  'https://youtube.com/watch?v=VFoR-gw5Z-8&feature=shared',
  'https://www.youtube.com/watch?v=EVmvJdtZUN0'
];

const youtubeIds = videoUrls.map(getYoutubeId).filter(Boolean) as string[];

function getYoutubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const VideoSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % youtubeIds.length);
  const prev = () => setCurrent((current - 1 + youtubeIds.length) % youtubeIds.length);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <button className="nav-button left" onClick={prev}>&#8249;</button>

        <div className="video-area">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeIds[current]}?autoplay=1&mute=1`}
            title="Video YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <button className="nav-button right" onClick={next}>&#8250;</button>
      </div>

      <div className="video-url">
        <a href={videoUrls[current]} target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      <div className="video-indicators">
        {youtubeIds.map((_, idx) => (
          <span
            key={idx}
            className={`indicator-dot ${current === idx ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          >
            &#9679;
          </span>
        ))}
      </div>

    </div>
  );
};

export default VideoSlider;