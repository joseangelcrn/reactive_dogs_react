import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DogPreview from "./Utils/DogPreview";
import { Button } from "@mui/material";
import dogAPI from "../services/DogAPI";

const InfiniteScroll = () => {
  const [apiDogs, setApiDogs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const loadDogsFromApi = async (n) => {
    setIsLoading(true);
    let urls = await dogAPI.loadImages(n);
    console.log(urls);
    var newDogs = [];
    urls.forEach((urlImg) => {
      newDogs.push({
        name: "",
        description: "",
        url: urlImg,
      });
    });
    setApiDogs((prev) => [...prev, ...newDogs]);
    setIsLoading(false);
  };

  useEffect(() => {
    return async () => {
      loadDogsFromApi(40);
    };
  }, []);

  return (
    <Grid container rowSpacing={4}>
      {apiDogs.map((item, index) => (
        <Grid
          key={index}
          item
          xs={3}
          sm={6}
          md={4}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <DogPreview dog={item} readonly={true} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button
          onClick={() => {
            loadDogsFromApi(10);
          }}
          fullWidth
          variant="contained"
        >
          Load More !
        </Button>
      </Grid>
    </Grid>
  );
};

export default InfiniteScroll;
