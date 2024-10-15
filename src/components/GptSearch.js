import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACK_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10 w-full overflow-hidden">
        <img className="object-cover h-screen md:h-screen w-full" src={BACK_IMG} alt="background-img" />
      </div>
      <div className="md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
