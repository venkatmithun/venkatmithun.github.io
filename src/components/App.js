import React from "react";
import "../styles/App.css";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <div id="Home" className="App-header">
        <h2>Hello, I'm Venkat Mithun Kadiyala</h2>
        <h3>Software Engineer & Grad student</h3>
        <h3>I love building intelligent applications</h3>
        <img
          src={require("../images/myPic.jpeg")}
          style={{
            height: "200px",
            borderRadius: 50,
          }}
          alt="mithun"
        ></img>
        <p
          style={{
            border: 1,
            borderWidth: 1,
            borderColor: "white",
            borderStyle: "solid",
            borderRadius: 5,
            padding: 10,
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("About")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View my work!
        </p>
      </div>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
