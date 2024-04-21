import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";

const Login = () => {
  const controlStyles = {
    marginTop: 6,
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const submit = (e) => {
    console.log("submit");
    e.preventDefault();
  
    let newErrors = [];
    if (!username || username.trim().length === 0) {
      newErrors.push("Username can not be empty");
    } else if (!password || password.trim().length === 0) {
      newErrors.push("Password can not be empty");
    }
    //Wrong credentials
    else if (username !== "react" || password !== "react") {
      newErrors.push(
        "Wrong credentials ! (psst, username and password is: react)"
      );
    }
    setErrors([...newErrors]);

    console.log('length newErrors = '+newErrors.length);
    console.log('length errors = '+errors.length);
    //Login OK
    if (newErrors.length === 0) {
      dispatch(login({ username, password }));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        submit(e);
      }}
      autoComplete="off"
      style={{
        backgroundColor: "rgba(96, 178, 245, 0.31)",
        padding: "10px 60px 60px 60px",
        borderRadius: 30,
        boxShadow: "1px 1px 3px",
        marginTop: "80px",
      }}
    >
      <Box>
        <h2 align="center">Login</h2>

        <TextField
          sx={controlStyles}
          fullWidth
          size="small"
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          sx={controlStyles}
          fullWidth
          size="small"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button type="submit" sx={controlStyles} variant="outlined">
          Login
        </Button>
      </Box>
      <Box marginTop={3}>
        {errors.map((error, index) => (
          <Alert key={index} severity="error">
            {error}
          </Alert>
        ))}
      </Box>
    </form>
  );
};

export default Login;
