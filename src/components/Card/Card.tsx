import Content from "../Content/Content";
import Image from "../Image/Image";

//! bg color, text color, image url, description => props

interface ICardProps {
    bgColor: string;
    textColor: string;
    imageUrl: string;
    description: string;
    url?: string;
}

function Card(props: ICardProps) {
  const { bgColor, textColor, imageUrl, description } = props; // Destructuring props ES

  return (
    <div className="container">
      <h1>Card</h1>
      <div className="card" style={{ backgroundColor: bgColor, color: textColor }} >
        <img src={imageUrl} alt={description}  style={{ objectFit: 'cover', width: '100%', height: '400px' }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
