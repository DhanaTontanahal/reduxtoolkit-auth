import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./registerSlice";

function Register() {
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.register.isRegistered);
  const error = useSelector((state) => {
    return state?.register?.error;
  });
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({ email: email, username: userName, password: password })
    );
  };

  console.log(error);
  return (
    <>
      {isRegistered && "Registered"}
      {error !== null && error?.message}
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
