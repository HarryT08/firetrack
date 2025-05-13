import "./HorizontalCard.css";

interface HorizontalCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const HorizontalCard = ({ image, title, description, link }: HorizontalCardProps) => {
  const shortText = description.length > 180
    ? description.slice(0, 180) + "..."
    : description;

  return (
    <div className="horizontal-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{shortText}</p>
        <a
          href={link}
          className="ver-mas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más →
        </a>
      </div>
    </div>
  );
};

export default HorizontalCard;