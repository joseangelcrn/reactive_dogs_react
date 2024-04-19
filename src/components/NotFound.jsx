import { Margin, Outlet, RoundedCorner } from "@mui/icons-material";
import { Button, Link, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div align="center">
      <h1><Typography variant="body1" color="initial">Not Found !</Typography></h1>
      <img
        style={{ backgroundColor: "rgb(48, 76, 215)", padding: 20 }}
        src="https://media1.tenor.com/m/5_E52aMtD4EAAAAd/bobawooyo-dog-confused.gif"
        alt=""
      />
      <br />
      <Button
        sx={{ marginTop: 1 }}
        variant="outlined"
        color="error"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home !
      </Button>
    </div>
  );
};

export default NotFound;
