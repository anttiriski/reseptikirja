import React from 'react'
import { TextField } from '@material-ui/core';

const SearchBar = props => {

    return (
        <div>
            <TextField onChange={() => console.log()}/>
        </div>
    )
};

export default SearchBar;