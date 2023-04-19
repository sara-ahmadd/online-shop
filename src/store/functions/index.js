import { auth } from "@/src/firebase/config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { userActions } from "../userSlice";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = (dispatch) => {
  signInWithPopup(auth, provider)
    .then((userCred) => {
      dispatch(
        userActions.setUser({
          name: userCred.user.displayName,
          email: userCred.user.email,
          photo: userCred.user.photoURL,
        })
      );
    })
    .catch((err) => console.log(err.message));
};

export const loginWithEmailAndPass = (dispatch, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      dispatch(
        userActions.setUser({
          name: userCred.user.email.split("@")[0],
          email: userCred.user.email,
        })
      );
    })
    .catch((err) => console.log(err.message));
};

export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCred) => {});
};

export const logout = (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch(userActions.setUser(null));
    })
    .catch((err) => console.log(err.message));
};
