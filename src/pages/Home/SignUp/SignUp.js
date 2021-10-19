/** @format */

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const {
    hundleRegistration,
    hundleEmailChange,
    hundlePasswordChange,
    hundleNameChange,
  } = useAuth;
  return (
    <div>
      <form onSubmit={hundleRegistration}>
        <h2>Please Register</h2>
        <br />
        <br />
        <label>Name: </label>
        <input
          onBlur={hundleNameChange}
          type='text'
          placeholder='Type Your Name'
        />
        <br />
        <br />
        <label htmlFor=''>Email: </label>
        <input onChange={hundleEmailChange} type='email' required />
        <br />
        <br />
        <label htmlFor=''>Password: </label>
        <input onChange={hundlePasswordChange} type='password' />
        <br />
        <br />
        <button type='submit'>Register</button>
        <br />
        <br />
        <Link to='/login'>Already Register?</Link>
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignUp;
