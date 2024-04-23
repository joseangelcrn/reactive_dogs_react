import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/dogSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DogPreview = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = props.dog;

  const deleteDog = () => {
    if (confirm("¿Are you sure?")) {
      console.log("remove dog (id = " + props.dog.id + ")");
      dispatch(remove(id));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={props.dog.local ? "./" + props.dog.url : props.dog.url}
          alt="Dog Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dog.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.dog.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {!props.readonly && (
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              navigate("/adopt_dog/" + id);
            }}
          >
            EDIT
          </Button>
          <Button size="small" color="error" onClick={deleteDog}>
            DELETE
          </Button>
        </CardActions>
      ) || (
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            navigate("/adopt_dog?url="+props.dog.url);
          }}
          fullWidth
        >
          ADOPT THIS DOG !
        </Button>
      </CardActions>      )}
    </Card>
  );
};

export default DogPreview;
