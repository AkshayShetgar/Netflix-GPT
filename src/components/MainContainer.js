import { useSelector } from "react-redux";
import BackgroundVideo from "../components/BackgroundVideo";
import VideoTitle from "../components/VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

  return (
    <div>
         <VideoTitle title ={original_title} overview={overview} />
        <BackgroundVideo movieId={id} />
    </div>
  )
}

export default MainContainer