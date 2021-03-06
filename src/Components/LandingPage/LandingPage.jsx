import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./LandingPage.css";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(1),
      width: "auto"
    }
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 10, 1, 1),

    width: "100%",
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignContent: "center",
    height: "100%"
  },
  gridSizes: {
    height: "100%",
    display: "inherit"
  }
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  

  const emailRecord = (data) => {
    setEmail(data.target.value)
  }

  

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ alignContent: "center" }}>
            <Typography className={classes.title} variant="h6" noWrap>
              INVISTA.ME
            </Typography>

            <div className={classes.search}>
              <InputBase
                placeholder="Email"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={emailRecord}
              />
            </div>
            <div className={classes.search}>
              <InputBase
                placeholder="Senha"
                type="password"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div>
              <Button
                color="inherit"
                className={classes.submit}
                onClick={() => {
                    if (email.search('empresa')){

                        props.history.push("/enterprises");
                    }else{
                        props.history.push("/researchers");
                    }
                }}
              >
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={"contentMain"}>
        <div className={"items"}>
          <h1>Sua ponte para a ciência começa aqui...</h1>
          <div className={"subItem"}>
            <img id="logo" src="/images/logo.png" align="middle"></img>
          </div>
        </div>
        <div className={"items"}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="nome"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="sobrenome"
              label="Sobrenome"
              name="sobrenome"
              autoComplete="sobrenome"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirmação de senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                props.history.push("/enterprises");
              }}
            >
              Inscreva-se
            </Button>
          </form>
          <p>
            É uma empresa?&nbsp;
            <a 
                href="#"
                onClick={() => {
                    props.history.push("/enterpriseSignUp");
                }}>
              Crie seu perfil empresarial clicando aqui!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
