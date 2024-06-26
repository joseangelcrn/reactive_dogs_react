import React, { Fragment, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import Menu from "../Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const user = useSelector((store) => store.user.data);
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


  return (
    <Fragment>
      {user ? (
        <Fragment>
          {/* Auth */}
          <Grid sx={{marginBottom:5}} container spacing={1} columns={12} >
            <Grid item xs={12}>
              <Menu/>
            </Grid>
            <Grid container spacing={1} columns={12} >
            </Grid>
          </Grid>
          <Outlet/>

        </Fragment>
      ) : (
        <Fragment>
          {/* No Auth */}
          <Grid container columns={12} sx={{display:'flex',justifyContent:'center'}}>
            <Grid item xs={8} xl={6}>
              <Login/>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Layout;
