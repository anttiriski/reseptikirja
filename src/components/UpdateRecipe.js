import React from 'react';
import Input from '@material-ui/core/Input';
import { Button, Slider, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  input: {
    minWidth: 800,
    margin: 20
  },

  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
  },

  slider: {
      maxWidth: 800,
      margin: 20
  },

  select: {
      width: "100%"
  }

});

class AddRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: null,
            ingredients: [],
            recipeSteps: [],
            category: '',
            ovenTemperature: null,
            cookingTime: null,
            servings: null,
            diet: null,
            id: ''
        }
    }


    componentDidMount() {

        const name = this.props.location.state.name

        console.log(name)

        const fetchData = async () => {
            const response = await axios.get(
              'http://localhost:5000/recipes/update', {
                  params: {
                      name: name
                  }
              }
            );
            this.setState({name: response.data.name})
            this.setState({description: response.data.description})
            this.setState({ingredients: response.data.ingredients})
            this.setState({recipeSteps: response.data.recipeSteps})
            this.setState({category: response.data.category})
            this.setState({ovenTemperature: response.data.ovenTemperature})
            this.setState({cookingTime: response.data.cookingTime})
            this.setState({servings: response.data.servings})
            this.setState({diet: response.data.diet})
            this.setState({id: response.data._id})
          };
      
          fetchData();
    }

    handleSubmit = event => {
        //event.preventDefault();
        const steps = document.getElementById('steps').value.split(/\r?\n/)
        const ingredients = document.getElementById('ingredients').value.split(/\r?\n/)


        axios.post(`http://localhost:5000/recipes/update/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description,
            ingredients: ingredients,
            recipeSteps: steps,
            category: this.state.category,
            ovenTemperature: this.state.ovenTemperature,
            cookingTime: this.state.cookingTime,
            servings: this.state.servings,
            diet: this.state.diet
        })
        .then(res => {
            console.log(res.data);
        })

        this.props.history.push('/');

    }

    handleIngredients = event => {
        this.setState({ingredients: event.target.value})
        console.log(this.state.ingredients)
    }

    render() {
        const {classes} = this.props;
    return (
        <form className={classes.root} noValidate autoComplete="off" >
        <div className={classes.container}>
            <Input autoFocus value={this.state.name} className={classes.input} placeholder="Ruuan nimi" required={true} inputProps={{ 'aria-label': 'name' }} onChange={(e) => (this.setState({name: e.target.value}))}/>
            <Input value={this.state.description} className={classes.input} placeholder="Kuvaus" inputProps={{ 'aria-label': 'description' }} onChange={(e) => (this.setState({description: e.target.value}))}/>
            <Input defaultValue={this.state.ingredients.join('\n')} id="ingredients" multiline className={classes.input} placeholder="Tarvittavat aineet" inputProps={{ 'aria-label': 'ingredients' }}/>
            <Input defaultValue={this.state.recipeSteps.join('\n')} id="steps" multiline className={classes.input} placeholder="Valmistusohje" inputProps={{ 'aria-label': 'recipeSteps' }} />
            <FormControl style={{margin: 20}}>
            <InputLabel>Kategoria</InputLabel>
                <Select
                    value={this.state.category}
                    style={{minWidth: 800}}
                    fullWidth 
                    onChange={(e) => (this.setState({category: e.target.value}))}
                    >
                    <MenuItem value={'meat'}>Liharuuat</MenuItem>
                    <MenuItem value={'chicken'}>Kanaruuat</MenuItem>
                    <MenuItem value={'soup'}>Keitot</MenuItem>
                    <MenuItem value={'fish'}>Kalaruuat</MenuItem>
                    <MenuItem value={'cake'}>Kakut</MenuItem>
                    <MenuItem value={'pasta'}>Pastat</MenuItem>
                    <MenuItem value={'boxfood'}>Laatikkoruuat</MenuItem>
                    <MenuItem value={'cookie'}>Keksit</MenuItem>
                    <MenuItem value={'drink'}>Juomat</MenuItem>
                    <MenuItem value={'snack'}>Välipala</MenuItem>
                    <MenuItem value={'other'}>Muut</MenuItem>
                </Select>
            </FormControl>
            <Typography>Uunin lämpötila</Typography>
            <Slider value={this.state.ovenTemperature} className={classes.slider} defaultValue={0} max={300} step={5}valueLabelDisplay="on" onChange={(event, value) => (this.setState({ovenTemperature: value}))}/>
            <Input value={this.state.cookingTime} className={classes.input} placeholder="Valmistusaika (kokonaisina minuutteina)" inputProps={{ 'aria-label': 'cookingTime' }} onChange={(e) => (this.setState({cookingTime: e.target.value}))}/>
            <Input value={this.state.servings} className={classes.input} placeholder="Annosten määrä (kokonaislukuna)" inputProps={{ 'aria-label': 'servings' }} onChange={(e) => (this.setState({servings: e.target.value}))}/>
            <Input value={this.state.diet} className={classes.input} placeholder="Erityisruokavaliot" inputProps={{ 'aria-label': 'diet' }} onChange={(e) => (this.setState({diet: e.target.value}))}/>
            <Button type="submit" onClick={this.handleSubmit}>Päivitä</Button>
        </div>
        </form>
    );
}
}

export default withStyles(useStyles)(AddRecipe)