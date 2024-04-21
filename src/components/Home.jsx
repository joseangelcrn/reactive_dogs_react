import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DogPreview from "./Utils/DogPreview";
import { Grid, Typography } from "@mui/material";
import { generateFakeDogs } from "../redux/dogSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  //Generate fake dogs
  //Set value in 0 if you want to try CRUD by app interface
  const fakeDogs = 0;

  const dogs = useSelector((store) => store.dog.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fakeDogs > 0) {
      dispatch(generateFakeDogs(fakeDogs));
    }
    
    console.log(dogs);
  }, []);

  return (
    <Grid container columns={12} rowSpacing={6}>
      {dogs.length > 0 ? (
        dogs.map((dog) => (
          <Grid key={dog.id} item xs={12} sm={6} md={4} lg={3}>
            <DogPreview dog={dog} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="p">
            There is not any adopted dogs.{" "}
            <NavLink to="/adopt_dog">
              <Typography fontWeight={"bold"} variant="p" color="initial">
                You can adopt one
              </Typography>
            </NavLink>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
