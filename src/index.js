import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Setup from "./containers/Setup";
import Styling from "./containers/Styling";
import AirshipSchema from "./containers/AirshipSchema";
import ReactTutorial from "./containers/ReactTutorial";
import Elements from "./containers/Elements";
import Element from "./containers/Element";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Setup} />
      <Route path="/styling" component={Styling} />
      <Route path="/airship-schema" component={AirshipSchema} />
      <Route path="/react-tutorial" component={ReactTutorial} />
      <Route path="/elements" component={Elements} />
      <Route path="/element/:id" component={Element} />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
