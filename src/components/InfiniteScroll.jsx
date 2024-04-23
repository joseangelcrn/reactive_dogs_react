import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DogPreview from "./Utils/DogPreview";
import { Button } from "@mui/material";


const InfiniteScroll = () => {
  const [apiDogs, setApiDogs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const loadDogsFromApi = async (n) => {
    setIsLoading(true);
    let response = await fetch("https://dog.ceo/api/breeds/image/random/" + n);
    let data = await response.json();
    var newDogs = [];
    data.message.forEach((urlImg) => {
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
    return () => {
      loadDogsFromApi(40);
    };
  }, []);

  return (
    <Grid columns={12} container rowSpacing={4} columnSpacing={3}>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {apiDogs.map((item, index) => (
          <Grid key={index} item xs={3}>
            <DogPreview dog={item} readonly={true}  />
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
    </Grid>
  );
};

export default InfiniteScroll;
