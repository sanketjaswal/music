import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Piano } from "./webpages/piano";
import { Xylophone } from "./webpages/Xylophone";
import { Drums } from "./webpages/Drums";
import { Octapades } from "./webpages/Octapades";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Music = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/Piano" component={Piano} />
      <Route path="/Xylophone" component={Xylophone} />
      <Route path="/Drums" component={Drums} />
      <Route path="/Octapades" component={Octapades} />
    </div>
  </Router>
);

ReactDOM.render(Music, document.getElementById("root"));

reportWebVitals();
