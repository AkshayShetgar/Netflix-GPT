import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideos = (movieId) => {

  const dispatch = useDispatch();

  const trailer = useSelector((store) => store.movies.trailer);

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data);

    const filterTrailer = data.results.filter((res) => res.type === "Trailer");
    const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
    // console.log(trailer);
    dispatch(addTrailer(trailer));
  };
};

export default useTrailerVideos;
