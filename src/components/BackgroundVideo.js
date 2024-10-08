import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";

const BackgroundVideo = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailer);

  useTrailerVideos(movieId);

  return (
    <div>
      <iframe className="w-screen aspect-video"
        src={'https://www.youtube.com/embed/' + trailerVideo?.key + '?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0'}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
