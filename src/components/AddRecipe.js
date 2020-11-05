import React from "react";
import Input from "@material-ui/core/Input";
import {
  Button,
  Slider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  input: {
    minWidth: 800,
    margin: 20,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  slider: {
    maxWidth: 800,
    margin: 20,
  },

  select: {
    width: "100%",
  },

  link: {
    position: "absolute",
    left: 100,
    padding: "10px 2em",
    color: "black",
    textDecoration: "none",
    border: "1px solid blue",
    borderRadius: "200px",
    marginTop: 20,
    textTransform: "uppercase",
  },
});

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      ingredients: "",
      recipeSteps: "",
      category: "",
      ovenTemperature: null,
      cookingTime: null,
      servings: null,
      diet: null,
    };
  }

  handleSubmit = (event) => {
    const steps = this.state.recipeSteps.split(/\r?\n/);
    const ingredients = this.state.ingredients.split(/\r?\n/);

    axios
      .post("http://localhost:5000/recipes/add", {
        name: this.state.name,
        description: this.state.description,
        ingredients: ingredients,
        recipeSteps: steps,
        category: this.state.category,
        ovenTemperature: this.state.ovenTemperature,
        cookingTime: this.state.cookingTime,
        servings: this.state.servings,
        diet: this.state.diet,
      })
      .then((res) => {
        console.log(res.data);
      });

    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Link className={classes.link} to="/">
          <Button>Takaisin etusivulle</Button>
        </Link>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.container}>
            <Input
              autoFocus
              className={classes.input}
              placeholder="Ruuan nimi"
              required={true}
              inputProps={{ "aria-label": "name" }}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <Input
              className={classes.input}
              placeholder="Kuvaus"
              inputProps={{ "aria-label": "description" }}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <Input
              multiline
              className={classes.input}
              placeholder="Tarvittavat aineet"
              inputProps={{ "aria-label": "ingredients" }}
              onChange={(e) => this.setState({ ingredients: e.target.value })}
            />
            <Input
              multiline
              className={classes.input}
              placeholder="Valmistusohje"
              inputProps={{ "aria-label": "recipeSteps" }}
              onChange={(e) => this.setState({ recipeSteps: e.target.value })}
            />
            <FormControl style={{ margin: 20 }}>
              <InputLabel>Kategoria</InputLabel>
              <Select
                style={{ minWidth: 800 }}
                fullWidth
                onChange={(e) => this.setState({ category: e.target.value })}
              >
                <MenuItem value={"meat"}>Liharuuat</MenuItem>
                <MenuItem value={"chicken"}>Kanaruuat</MenuItem>
                <MenuItem value={"soup"}>Keitot</MenuItem>
                <MenuItem value={"fish"}>Kalaruuat</MenuItem>
                <MenuItem value={"cake"}>Kakut</MenuItem>
                <MenuItem value={"pasta"}>Pastat</MenuItem>
                <MenuItem value={"boxfood"}>Laatikkoruuat</MenuItem>
                <MenuItem value={"cookie"}>Keksit</MenuItem>
                <MenuItem value={"drink"}>Juomat</MenuItem>
                <MenuItem value={"snack"}>Välipala</MenuItem>
                <MenuItem value={"other"}>Muut</MenuItem>
              </Select>
            </FormControl>
            <Typography>Uunin lämpötila</Typography>
            <Slider
              className={classes.slider}
              defaultValue={0}
              max={300}
              step={5}
              valueLabelDisplay="on"
              onChange={(event, value) =>
                this.setState({ ovenTemperature: value })
              }
            />
            <Input
              className={classes.input}
              placeholder="Valmistusaika (kokonaisina minuutteina)"
              inputProps={{ "aria-label": "cookingTime" }}
              onChange={(e) => this.setState({ cookingTime: e.target.value })}
            />
            <Input
              className={classes.input}
              placeholder="Annosten määrä (kokonaislukuna)"
              inputProps={{ "aria-label": "servings" }}
              onChange={(e) => this.setState({ servings: e.target.value })}
            />
            <Input
              className={classes.input}
              placeholder="Erityisruokavaliot"
              inputProps={{ "aria-label": "diet" }}
              onChange={(e) => this.setState({ diet: e.target.value })}
            />
            <Button type="submit" onClick={this.handleSubmit}>
              Tallenna
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddRecipe);
