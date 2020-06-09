import React, {useState} from 'react'
import { Card, CardActions, CardContent, Button, Typography, Dialog, DialogContentText, IconButton } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import Ingredient from './Ingredient'
import RecipeStep from './RecipeStep'
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

import DeleteRecipe from './DeleteRecipe'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  editButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  deleteButton: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    right: theme.spacing(10),
  }
});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
        <DeleteRecipe id={props.id} />
        <IconButton className={classes.editButton}>
          <Link to={{
            pathname: "/update",
            state: {
              name: children
            }
          }}><EditIcon /> </Link>
        </IconButton>
    </MuiDialogTitle>
  );
});


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 20,
      backgroundColor: "#F5F5F5",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      marginTop: 30,
    }
  });

const Recipe = props => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.props.description}
            </Typography>
          </CardContent>

        <CardActions>
            <Button variant="outlined" size="small" color="secondary" onClick={handleClickOpen} className={classes.button}>
                Reseptiin
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'lg'}>
                <DialogTitle id={props.props._id} >{props.props.name}</DialogTitle>
                <DialogContentText>
                <Divider />
                    <List>
                        {props.props.ingredients.map(ingredient => <Ingredient ingredient={ingredient}/>)}
                    </List>
                <Divider />
                    <List>
                        {props.props.recipeSteps.map(step => <RecipeStep step={step} />)}
                    </List>
                </DialogContentText>
            </Dialog>
        </CardActions>
      </Card>
    )
}

export default Recipe;