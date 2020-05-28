import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { Tooltip, Fab, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
const AddRecipeButton = props => {
    const classes = useStyles();
  
    return (
      <div>
        <Link to="/addRecipe">
        <Tooltip title="Lisää resepti">
          <Fab color="secondary" className={classes.absolute}>
              <AddIcon />
          </Fab>
        </Tooltip>
        </Link>
      </div>
    );
  }

export default AddRecipeButton;