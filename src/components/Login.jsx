import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import Paper from "@mui/material/Paper";

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

    //Login OK
    if (newErrors.length === 0) {
      dispatch(login({ username, password }));
    }
  };

  return (
    <Paper
      style={{
        marginTop:'50px',
        padding: "20px",
        height: "350px",
        backgroundColor: "rgb(47, 141, 229)",
      }}
      elevation={5}
      variant="elevation"
      square={false}
    >
      <form
        onSubmit={(e) => {
          submit(e);
        }}
        autoComplete="off"
      >
        <Box>
          <Typography color="white" variant="h4" align="center">Identify yourself</Typography>

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
          <Button
            type="submit"
            sx={{
              ...controlStyles,
              bgcolor: "white",
              "&:hover": {
                background: "rgb(23, 96, 191)",
                color: "white",
              },
            }}
            onDurationChangeCapture={() => {
              console.log("change active !");
            }}
            variant="outlined"
          >
            Login
          </Button>
        </Box>
        <Box sx={{margin:'10px'}}>
          {errors.map((error, index) => (
            <Alert key={index} severity="error">
              {error}
            </Alert>
          ))}
        </Box>
      </form>
    </Paper>
  );
};

export default Login;
