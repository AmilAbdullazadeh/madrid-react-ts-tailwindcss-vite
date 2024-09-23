import StarRating from "../StarRating/StarRating";

interface ItemProps {
    image: string;
    title: string;
    description: string;
    rating: number;
    releaseDate: string;
}

const Item = ({ 
    image,
    title,
    description,
    rating,
    releaseDate
 }: ItemProps) => {
  return (
    <div className="max-w-sm border border-solid rounded overflow-hidden shadow-lg p-4" >
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      <div className="px-6 py-4" >
        <h3 className="font-bold text-xl mb-2" >{title}</h3>
        <p className="text-gray-700 text-base" >{description}</p>
        <p className="text-gray-500 text-sm" >Release date: {releaseDate}</p>
      </div>

      <div className="px-6" >
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export default Item;