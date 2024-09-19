interface CardProps {
    name: string;
    age: number;
    imageurl: string;
}

function Card({ name, age, imageurl }: CardProps) {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img className="card-img-top" src={imageurl} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default Card;
