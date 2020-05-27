import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';

const Ingredient = props => {
    return(
        <ListItem button>
            <ListItemText>{props.ingredient}</ListItemText>
        </ListItem>
    )
}

export default Ingredient;