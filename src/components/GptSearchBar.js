import { useSelector } from "react-redux";
import { languages } from "../utils/constant";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center align-">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input type="text" className="col-span-9 p-2 m-2 text-gray-700" placeholder={languages[langKey].gptSearchPlaceholder} />
            <button className="bg-red-600 col-span-3 p-2 m-2 rounded-md text-white">{languages[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar