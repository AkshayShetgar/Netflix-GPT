import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dsipatch = useDispatch();

  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dsipatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlayingMovies;