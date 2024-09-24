import axios from "axios";
import Deatils from "./components/Details/Details";
import List from "./components/List/List";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "./configs/tmdb";
import "./global.css";
import Header from "./layouts/Header/Header";
import { useEffect, useState } from "react";
import { Movie } from "./types";

function App() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  async function fetchPopulars() {
    const res = await axios(`${BASE_URL}/popular?api_key=${API_KEY}`);
    setCurrentMovie(res.data.results[0]);
  }

  async function fetchRecommendations(movie_id: number) {
    const res = await axios(`${BASE_URL}/${movie_id}/recommendations?api_key=${API_KEY}`);
    setMovies(res.data.results);
  }

  const selectMovie = (movie: Movie) => {
    setCurrentMovie(movie);
  }

  // componentDidMount, componentDidUpdate və componentWillUnmount

  useEffect(() => {
    fetchPopulars();
    console.log("ComponentDidMount");
  }, []); // empty dep === componentDidMount

  useEffect(() => {
    fetchRecommendations(currentMovie?.id || 0);
    console.log("ComponentDidUpdate");
  }, [currentMovie]); // componentDidUpdate

  useEffect(() => {
    return () => {
      console.log("ComponentWillUnmount");
    };
  }, []); // componentWillUnmount

  return (
    <div className="p-4 " style={{
      backgroundImage: `url(${IMAGE_BASE_URL}${currentMovie?.backdrop_path})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color: "white",
      height: "101vh",
    }} >
      <Header />

      <div className="m-4 border border-solid !rounded-lg h-96 p-4">
        {/* Deatils */}
        { currentMovie && <Deatils movie={currentMovie} /> }

        {/* List */}
        { movies.length > 0 && <List changeMovie={selectMovie} movies={movies} /> }
      </div>
    </div>
  );
}

export default App;
