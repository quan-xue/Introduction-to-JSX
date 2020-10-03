import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> Hello World! </h1>
    <p>This is a paragraph </p>
  </div>,
  document.getElementById("root")
); //what to show, where to show
//JSX files are created

//comparison with vanilla JS, which is really long
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
