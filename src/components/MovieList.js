import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex h-34">
          {movieData && movieData.length > 0 ? (
            movieData.map((movies) => (
              <MovieCard key={movies.id} posterPath={movies.poster_path} />
            ))
          ) : (
            <p>No Films Avaliable</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
