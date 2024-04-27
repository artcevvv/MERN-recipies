import React, { useState } from "react";
import Form from "./Form";
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post("http://localhost:4000/auth/register", {username, password})
        console.log('Registered')
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div>
        <h2>Register</h2>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
          BtnText="Register"
        />
    </div>
  );
}
