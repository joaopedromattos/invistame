import React from "react";
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
import "./LandingPage.css";

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
    padding: theme.spacing(1, 1, 1, 1),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120
    }
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={"removing"}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>

            <div className={classes.search}>
              <InputBase
                placeholder="Email"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.search}>
              <InputBase
                placeholder="Senha"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className={"contentMain"}>
        <div className={"items"}>
          <h1 className={"items"}>Sua ponte para a ciência começa aqui...</h1>
        </div>
        <div className={"items"}>
          <p>teste</p>
        </div>
      </div>
    </div>
  );
}
