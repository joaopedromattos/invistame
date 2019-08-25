import React, { useState, useEffect } from "react";
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
import data2 from "../../dataPessoas";

import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

let data = data2;
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

export default function Researchers(props) {
  const classes = useStyles();

  const [search, setValues] = useState({
    value: ""
  });

  const offset = 0;

  const [firstRender, setRender] = useState(true);

  let ret = useState(data);
  const [enterprises, setEnterprises] = ret;

  useEffect(() => {
    if (firstRender) {
      const a = setRender(false);

      if (a) setEnterprises(a);
    } else {
      let a = data.filter(
        val =>
          val.razaoSocial.indexOf(search.value) > -1 ||
          val.areas.indexOf(search.value) > -1
      );

      setEnterprises(a);
    }
  }, [search.value, firstRender]);

  const handleChange = prop => event => {
    setValues({ ...search, [prop]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.search}>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="adornment-value">
              Pesquise um pesquisador
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

        {enterprises.length != 0 ? (
          <Grid container spacing={3}>
            {enterprises.map((value, index) => (
              <Grid item xs={3} key={index}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Sem foto"
                      height="200"
                      image={value.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        noWrap={true}
                      >
                        {value.razaoSocial}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        noWrap={true}
                      >
                        {value.areas}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => {
                      props.history.push(`/researcher/`, {
                        value: value,
                        image:value.image,                          
                        index: index
                      });
                    }}>
                      Ver perfil
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className={classes.margin}>
            <h1>Ainda não existem empresas cadastradas</h1>
          </div>
        )}
      </div>
      <div>
        <div
          style={{
            position: "fixed",
            top: "90%",
            right: "2px",
            color: "red"
          }}
        >
          
          <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={transition}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={
              <span id="message-id">
                I love snacksasdasdasdasdasdasdasdasdasdasdasdasdasdasd
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}
