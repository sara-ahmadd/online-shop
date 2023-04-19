import { loginWithEmailAndPass, loginWithGoogle } from "@/src/store/functions";
import { userActions } from "@/src/store/userSlice";
import Link from "next/link";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const [loginForm, setLoginForm] = useState({
    userName: "",
    loginEmail: "",
    loginPassword: "",
  });
  const handleInputValue = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  const googleLogin = (e) => {
    e.preventDefault();
    loginWithGoogle(dispatch);
  };

  const { loginEmail, loginPassword, userName } = loginForm;

  const login = () => {
    if (loginEmail && loginPassword && userName) {
      loginWithEmailAndPass(dispatch, loginEmail, loginPassword);
      console.log(user);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="my-3 mx-auto shadow p-5 bg-body-tertiary rounded"
      >
        <div className="my-4 text-center">
          <h1>Log In</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputUserName`" className="form-label">
              User Name
            </label>
            <input
              value={userName}
              name="userName"
              onChange={(e) => handleInputValue(e)}
              type="text"
              className="form-control"
              id="exampleInputUserName`"
              aria-describedby="user-name"
            />
            <label htmlFor="exampleInputEmail1`" className="form-label">
              Email address
            </label>
            <input
              value={loginEmail}
              name="loginEmail"
              onChange={(e) => handleInputValue(e)}
              type="email"
              className="form-control"
              id="exampleInputEmail1`"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1`" className="form-label">
              Password
            </label>
            <input
              value={loginPassword}
              name="loginPassword"
              onChange={(e) => handleInputValue(e)}
              type="password"
              className="form-control"
              id="exampleInputPassword1`"
            />
            <Link href="/login/reset" className="text-start">
              Reset your password
            </Link>
          </div>
          <input
            type="submit"
            className="btn btn-primary submit-btn"
            value={"Log In"}
          />
        </div>
        <div className="text-center mb-4">- - - or - - -</div>
        <button
          onClick={googleLogin}
          className="w-100 border-0 google-signUp mb-3 text-dark d-flex gap-3 submit-btn p-2 justify-content-center rounded"
        >
          <i className="bg-transparent text-dark">
            <BsGoogle />
          </i>
          <p className="bg-transparent">Sign in with google</p>
        </button>
        <div className="goToSignUp d-flex gap-2">
          <p>Donnot have an account?</p>
          <Link href="/login/signup" className="fw-bold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
