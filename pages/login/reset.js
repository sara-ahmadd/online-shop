import Link from "next/link";
import React, { useState } from "react";

const Reset = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //Reset email
  };
  return (
    <section className="custom-container d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="mb-3  text-center shadow p-5 bg-body-tertiary rounded"
      >
        <h2>Reset Password</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="mb-4 form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          className="mb-4  btn submit-btn text-light"
          value="Reset Password"
        />
        <div className="my-4 d-flex w-100 justify-content-between">
          <Link href="/login">Log In</Link>
          <Link href="/login/signup">Sign Up</Link>
        </div>
      </form>
    </section>
  );
};

export default Reset;
