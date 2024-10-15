import { useSelector } from "react-redux";
import { POSTER_CDN } from "../utils/constant";

const GptMovieSuggestions = () => {

  const searchMovies = useSelector((store) => store.gpt);

  const {movieResults} = searchMovies;

  if(!movieResults) return null;

  return (
    <div className="bg-black p-4 m-4 text-white flex bg-opacity-70 overflow-x-scroll scrollbar-hide">
      { 
        movieResults.map((movies) => (movies.poster_path ? (<img key={movies.id} className="h-56 w-48 mr-5" alt="movie_poster" src={POSTER_CDN + movies.poster_path} />) : null ))
      }
      </div>
  )
}

export default GptMovieSuggestions;


