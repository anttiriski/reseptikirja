import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  deleteButton: {
    position: "absolute",

    right: 100,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const DeleteRecipe = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(props.id);
    axios
      .delete(`http://localhost:5000/recipes/${props.id}`)
      .then((response) => console.log(response.data))
      .then(() => window.location.replace("http://localhost:3000"));
  };

  return (
    <div>
      <div className={classes.container}>
        <Button
          className={classes.deleteButton}
          onClick={handleDialogOpen}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Poista resepti
        </Button>
      </div>
      <Dialog open={open}>
        <DialogTitle>{"Haluatko varmasti poistaa reseptin?"}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            En
          </Button>
          <Button color="secondary" autoFocus onClick={handleDelete}>
            Kyllä
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteRecipe;
