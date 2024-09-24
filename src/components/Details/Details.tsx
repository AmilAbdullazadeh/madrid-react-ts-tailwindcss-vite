import { Movie } from "../../types";
import StarRating from "../StarRating/StarRating";

const Deatils = ({movie}: Movie) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
      <div className="px-6 py-4" >
            <StarRating rating={movie.vote_average} />
      </div>
      <p className="text-gray-700 text-base" >{movie.overview}</p>
    </div>
  );
};

export default Deatils;
