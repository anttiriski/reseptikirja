import React, {useState} from 'react'
import { Card, CardActions, CardContent, Button, Typography, Dialog, DialogTitle, DialogContentText, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import Ingredient from './Ingredient'
import RecipeStep from './RecipeStep'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
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
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Reseptiin
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'lg'}>
                <DialogTitle>{props.props.name}</DialogTitle>
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