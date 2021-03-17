import React from "react";
import "./style.css";
import Clock from  "./Clock.js"

export default function App() {
  return (
    <React.Fragment>
    <div>
      <h1>Ora e data attraverso un componente</h1>
    </div>
    <Clock country="Italia" timezone="0"/>
    <Clock country="qualche posto" timezone="10"/>
    </React.Fragment>
  );
}
