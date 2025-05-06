import "../../pages/Inicio.css";

interface CardFlipProps {
  title: string;
  image: string;
  description: string;
}

const CardFlip = ({ title, image, description }: CardFlipProps) => {
  return (
    <div className="feature-card-flip">
        <div className="card-inner">
            <div className="card-front">
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </div>
            <div className="card-back">
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
};

export default CardFlip;