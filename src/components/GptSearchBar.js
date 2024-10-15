import { useDispatch, useSelector } from "react-redux";
import { languages } from "../utils/constant";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {

  const inputText = useRef(null);

  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + inputText.current.value.trim().toLowerCase() + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    // console.log(data.results);
    dispatch(addGptMovies({movieNames : inputText.current.value, movieResults : data.results}));
  };

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[30%] md:pt-[8%] flex justify-center align-">
        <form className="bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input type="text" ref={inputText} className="col-span-9 p-2 m-2 text-gray-700" placeholder={languages[langKey].gptSearchPlaceholder} />
            <button className="bg-red-600 col-span-3 p-2 m-2 rounded-md text-white" onClick={handleGptSearchClick}>{languages[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar