import Item from "../Item/Item";

interface Movie {
    title: string;
    description: string;
    rating: number;
    releaseDate: string;
    image: string;
  }

const fetchedMovies: Movie[] = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      rating: 4.5,
      releaseDate: '2010-07-16',
      image: 'https://source.unsplash.com/random',
    },
    {
      title: 'The Matrix',
      description: 'A cyberpunk action film about simulated reality.',
      rating: 5,
      releaseDate: '1999-03-31',
      image: 'https://source.unsplash.com/random',
    },
  ];

const List = () => {
  return (
    <div className="gird-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6" >
      {
        fetchedMovies.map((movie, index) => (
          <Item 
            key={index} 
            title={movie.title} 
            description={movie.description} 
            rating={movie.rating} 
            releaseDate={movie.releaseDate} 
            image={movie.image}
          />
        ))
      }
    </div>
  );
};

export default List;
