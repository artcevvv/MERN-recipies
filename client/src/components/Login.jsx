import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
        const res = await axios.post('http://localhost:4000/auth/login', {
            username,
            password
        })
        
        setCookies("access_token", res.data.token);
        window.localStorage.setItem('userID', res.data.userID)
        navigate("/")
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div>
        <h2>Login</h2>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
          BtnText="Login"
        />
    </div>
  );
}
