import React from "react";

class Projects extends React.Component {
  state = {};
  render() {
    return (
      <div id="Projects" className="App-header">
        <h1>Projects</h1>
        <p>
          Here are few projects I've worked on! want to see more?{" "}
          <a href={""}>Email me!</a>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 20px",
            flexWrap: "wrap",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              style={{ width: "300px" }}
              src={require("../images/zono.png")}
            />
          </div>
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              src={require("../images/udefyn.jpeg")}
            />
          </div>
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              src={require("../images/github.png")}
            />
          </div>
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              style={{ width: "300px" }}
              src={require("../images/zono.png")}
            />
          </div>
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              src={require("../images/udefyn.jpeg")}
            />
          </div>
          <div style={{ width: "33.33%" }}>
            <img
              className="project-image"
              src={require("../images/github.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
