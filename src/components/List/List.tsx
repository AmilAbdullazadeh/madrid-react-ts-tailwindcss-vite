import { Movie } from "../../types";
import Item from "../Item/Item";

const List = ({movies, changeMovie}) => {
  return (
    <div className="flex overflow-x-scroll items-center justify-between gap-x-4 p-6" >
      {
        movies?.map((movie: Movie, index: number) => (
          <Item 
            key={index} 
            title={movie.title} 
            description={movie.overview} 
            rating={movie.vote_average} 
            releaseDate={movie.release_date} 
            image={movie.backdrop_path}
            changeMovie={() => changeMovie(movie)}
          />
        ))
      }
    </div>
  );
};

export default List;
