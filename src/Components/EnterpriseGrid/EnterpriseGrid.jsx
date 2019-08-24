import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  margin: {
    display: "flex",
    marginBottom: "2%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  card: {
    maxWidth: 345
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  const [search, setValues] = useState({
    value: ""
  });

  const handleChange = prop => event => {
    setValues({ ...search, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-value">
            Pesquise uma empresa
          </InputLabel>
          <Input
            id="adornment-value"
            value={search.value}
            onChange={handleChange("value")}
            startAdornment={
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
