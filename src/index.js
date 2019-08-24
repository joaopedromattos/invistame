import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EnterpriseSignUp from "./Components/EnterpriseSignUp/EnterpriseSignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import ShowEnterprise from "./Components/ShowEnterprise/ShowEnterprise";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
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
    <Route path="/" exact component={LandingPage} />
    <Route path="/entrepriseSignUp/" component={EnterpriseSignUp} />
    <Route path="/enterprise/:empresaId" component={ShowEnterprise} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
