import { styled } from "@mui/system";
import { Box, Grid, TextField } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { Button as BaseButton } from "@mui/base/Button";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { create, update } from "../redux/dogSlice";
import dogAPI from "../services/DogAPI";

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Button = styled(BaseButton)(
  ({ theme }) => `
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 600;
font-size: 0.875rem;
line-height: 1.5;
background-color: ${blue[500]};
padding: 8px 16px;
border-radius: 8px;
color: white;
transition: all 150ms ease;
cursor: pointer;
border: 1px solid ${blue[500]};
box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

&:hover {
  background-color: ${blue[600]};
}

&:active {
  background-color: ${blue[700]};
  box-shadow: none;
  transform: scale(0.99);
}

&:focus-visible {
  box-shadow: 0 0 0 4px ${
    theme.palette.mode === "dark" ? blue[300] : blue[200]
  };
  outline: none;
}

&.base--disabled {
  background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
  border: 0;
  cursor: default;
  box-shadow: none;
  transform: scale(1);
}
`
);

const CrudDog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const dogs = useSelector((store) => store.dog.data);
  const [dog, setDog] = useState({ name: "", description: "", url: "" });

  useEffect(() => {
    return () => {
      if (id) {
        let foundDog = dogs.filter((dog) => {
          return dog.id === id;
        })[0];

        setDog(foundDog);
      } 
      //new adoption with selected dog image
      else if(new URLSearchParams(location.search).get('url')){
        setDog({
          ...dog,
          url:new URLSearchParams(location.search).get('url')
        })
      }
      else {
        //Load Random Dog Image
        callDogApi();
      }

    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (id) {
      console.log("updating..!");
      dispatch(update({ id: id, updatedDog: dog }));
    } else {
      console.log("creating..!");
      dispatch(create(dog));
    }

    navigate("/home");
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setDog({
      ...dog,
      [name]: value,
    });
  };

  const callDogApi = async () => {
    let url = await dogAPI.loadImages(1);
    setDog((prevDog) => ({
      ...dog,
      url,
    }));
  };

  return (
    <Grid
      container
      columns={12}
      rowSpacing={6}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid item xs={12} sm={5} md={4} lg={5}>
        <h1 align="center">Adopt a dog</h1>
        <form action="" onSubmit={submit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {dog.url ? (
              <img
                style={{
                  boxShadow: "3px 3px 5px",
                  marginBottom: "10px",
                  maxWidth: "500px",
                }}
                src={dog.url}
                alt=""
              />
            ) : (
              "Loading.."
            )}
          </Box>
          <TextField
            name="name"
            label="Dog name"
            value={dog.name}
            fullWidth
            onChange={onChangeField}
            required
          />
          <Textarea
            name="description"
            style={{ marginTop: 30 }}
            minRows={3}
            placeholder="Description of your doggy"
            onChange={onChangeField}
            value={dog.description}
          />

          <Button
            style={{ marginTop: 15 }}
            color="primary"
            type="submit"
            disabled={dog.name.trim().length == 0}
          >
            {id ? "Update" : "Save"}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CrudDog;
