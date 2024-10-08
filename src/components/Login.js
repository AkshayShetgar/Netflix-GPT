import { useState, useRef } from "react";
import Header from "./Header";
import { validteFormData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACK_IMG } from "../utils/constant";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const [errMessage, setErrMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidationData = () => {
    const data = validteFormData(
      email.current.value,
      password.current.value,
    );
    setErrMessage(data);

    if (data) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL : "https://avatars.githubusercontent.com/u/90634309?v=4",
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          }).catch((error) => {
            setErrMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const onlinestatus = useOnlineStatus();

  if(onlinestatus === false) return (<h1>Looks like you are offline please check your internet connection 🔴</h1>)

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACK_IMG}
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black p-14 my-28 mx-[500px] rounded-lg bg-opacity-70"
      >
        <h1 className="text-white text-3xl font-bold mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            className="p-3.5 my-2 rounded-sm w-full bg-gray-700 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3.5 my-2 rounded-sm w-full bg-gray-700 text-white"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-3.5 my-2 rounded-sm w-full bg-gray-700 text-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 py-2 font-semibold text-lg">{errMessage}</p>
        <button
          className="bg-red-700 text-white rounded-sm w-full my-2 p-2 font-semibold"
          onClick={handleValidationData}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white font-semibold cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
