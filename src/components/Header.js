import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO, USER_ICON } from "../utils/constant";

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])

  return (
    <div className="flex justify-between absolute w-screen py-2 h-16 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && <div className="mr-10">
        <img
          className="w-12"
          alt="usericon"
          src={USER_ICON}
        />
        <button className="font-semibold bg-red-500 rounded-sm mt-2 text-white p-1" onClick={handleSignOut}>
          Sign Out
        </button>
        <p>Welcome{user.displayName}</p>
      </div>}
    </div>
  );
};

export default Header;
