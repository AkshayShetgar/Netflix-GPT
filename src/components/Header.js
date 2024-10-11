import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constant";
import { toggleSearchGptView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constant";
import { changeLanguages } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showLang = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleSearchGptView());
  };

  const handleLangauageChange = (e) => {
    dispatch(changeLanguages(e.target.value));
  };

  return (
    <div className="flex justify-between absolute w-screen py-2 h-16 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          {showLang && (
            <select
              className="mr-3 h-8 mt-2 bg-gray-900 text-white"
              onChange={handleLangauageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.name} value={lang.value}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className="text-white mr-3 bg-purple-500 font-semibold rounded-sm w-28 h-8 mt-2"
          >
            {showLang ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-sm mr-3"
            alt="usericon"
            src={USER_ICON}
          />
          <button
            className="font-semibold bg-red-500 rounded-sm  text-white mr-6 h-6 mt-2.5 w-20"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
