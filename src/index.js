import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EnterpriseSignUp from "./Components/EnterpriseSignUp/EnterpriseSignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import ShowEnterprise from "./Components/ShowEnterprise/ShowEnterprise";
import EnterpriseGrid from "./Components/EnterpriseGrid/EnterpriseGrid";
import Researchers from "./Components/Researchers/Researchers";
import ShowResearcher from "./Components/ShowResearcher/ShowResearcher";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff8000",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

ReactDOM.render(
  <Router>
      <ThemeProvider theme={theme}>
    <Route path="/" exact component={LandingPage} />
    <Route path="/enterpriseSignUp/" component={EnterpriseSignUp} />
    <Route path="/enterprise/" component={ShowEnterprise} />
    <Route path="/enterprises" component={EnterpriseGrid} />
    <Route path="/researchers" component={Researchers} />
    <Route path="/researcher" component={ShowResearcher} />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
