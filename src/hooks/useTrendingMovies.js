import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTrendingMovies = () => {

  const dsipatch = useDispatch();

  const trendingMovie = useSelector((store) => store.movies.trendingMovies);

  useEffect(() => {
    !trendingMovie && getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dsipatch(addTrendingMovies(data.results));
  };
};

export default useTrendingMovies;