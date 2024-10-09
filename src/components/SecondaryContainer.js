import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 ml-4">  
      <MovieList title={"Now Playing"} movieData={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movieData={movies.trendingMovies}/>
      <MovieList title={"Popular"} movieData={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movieData={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer