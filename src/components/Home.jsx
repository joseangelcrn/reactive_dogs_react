import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DogPreview from "./Utils/DogPreview";
import { Grid } from "@mui/material";
import { generateFakeDogs } from "../redux/dogSlice";

const Home = () => {
  const dogs = useSelector((store) => store.dog.data);
  const dispatch = useDispatch();

  useEffect(() => {
    //Generate 15 fake dogs if not exists
    // if (dogs.length === 0) {
    //   dispatch(generateFakeDogs())
    // }
      // dispatch(generateFakeDogs())
    
    console.log(dogs);
  }, []);

  return (
    <Grid container columns={12} rowSpacing={6}>
      {dogs &&
        dogs.map((dog) => (
          <Grid key={dog.id} item xs={12} sm={6} md={4} lg={3}>
            <DogPreview dog={dog} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
