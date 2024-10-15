import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const dsipatch = useDispatch();

  const popularMovie = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dsipatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;