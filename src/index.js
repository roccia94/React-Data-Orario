import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function renderOra() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(renderOra, 1000);
