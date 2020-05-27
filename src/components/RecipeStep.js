import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';

const RecipeStep = props => {
    return(
        <ListItem button>
            <ListItemText>{props.step}</ListItemText>
        </ListItem>
    )
}

export default RecipeStep;