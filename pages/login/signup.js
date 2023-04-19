import { signUp } from "@/src/store/functions";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SignUP = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password, firstName, lastName, confirmPassword } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password);
  };
  return (
    <section>
      <form
        className="my-3 mx-auto shadow p-5 bg-body-tertiary rounded"
        style={{ width: "50%" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (firstName && lastName && email && password && confirmPassword) {
            handleSubmit(e);
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName1" className="form-label">
            First Name
          </label>
          <input
            value={firstName}
            name="firstName"
            onChange={(e) => handleInputValue(e)}
            type="text"
            className="form-control"
            id="exampleInputFirstName1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName1" className="form-label">
            Last Name
          </label>
          <input
            value={lastName}
            name="lastName"
            onChange={(e) => handleInputValue(e)}
            type="text"
            className="form-control"
            id="exampleInputLastName1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            name="email"
            onChange={(e) => handleInputValue(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            name="password"
            onChange={(e) => handleInputValue(e)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => handleInputValue(e)}
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword1"
          />
          <p
            id="failure"
            style={
              password === confirmPassword
                ? { display: "none" }
                : { display: "block" }
            }
          >
            Confirmation doesnot match the password!
          </p>
          <p
            id="success"
            style={
              password === confirmPassword && confirmPassword !== ""
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Confirmation matches the password.
          </p>
        </div>
        <input
          type="submit"
          className="btn btn-primary submit-btn"
          value={" Sign Up"}
        />
        <div className="d-flex gap-2 mt-2">
          <p>Already have an account?</p>
          <Link href="/login" className="fw-bold">
            Log In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUP;
