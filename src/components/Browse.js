import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";

export const Browse = () => {

  useNowPlayingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
