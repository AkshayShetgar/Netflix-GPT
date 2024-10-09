import { POSTER_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-5">
      <img
        className="h-64 w-56"
        alt="movie poster"
        src={POSTER_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCard;
