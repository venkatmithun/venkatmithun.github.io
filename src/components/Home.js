import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { skills: true, data: null };
  }

  componentDidMount() {
    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;
    let aboutContent = document.getElementById("About-Content");

    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
      if (
        window.pageYOffset + aboutContent.offsetHeight >
          aboutContent.offsetTop &&
        !this.state.skills
      ) {
        this.setState({ skills: true });
      }
    });
  }

  navClick(e) {
    let el = document.getElementById(e);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { skills } = this.state;
    return (
      <React.Fragment>
        <div className="header" id="myHeader">
          <p className="nav-item" onClick={() => this.navClick("Home")}>
            Home
          </p>
          <p className="nav-item" onClick={() => this.navClick("About")}>
            About
          </p>
          <p
            className="nav-item"
            onClick={() => {
              if (!this.state.skills) {
                this.setState({ skills: true }, () =>
                  this.navClick("Projects")
                );
              } else {
                this.navClick("Projects");
              }
            }}
          >
            Portfolio
          </p>
          <p className="nav-item" onClick={() => this.navClick("Blog")}>
            Blog
          </p>
          <p className="nav-item" onClick={() => this.navClick("Contact")}>
            Contact
          </p>
        </div>
        <div id="About" className="App-header">
          <div className="content" style={{ width: "100%" }}>
            <h1>About</h1>
            <div style={{ flex: 1 }}>
              <div>
                <p>
                  I am experienced Software Developer. Currently working as
                  software engineer intern at Fidelity Investments. <br /> Let's
                  build something great together?
                </p>
              </div>
            </div>
            <div
              id="About-Content"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                backgroundColor: "purple",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px", padding: 10 }}>
                <p>Fast</p>
                <p style={{ fontSize: 16 }}>
                  Fast load times and lag free interaction, my highest priority
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "200px", padding: 10 }}>
                <p>Responsive</p>
                <p style={{ fontSize: 16 }}>
                  My layouts will work on any device, big or small.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "200px", padding: 10 }}>
                <p>Intuitive</p>
                <p style={{ fontSize: 16 }}>
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "200px", padding: 10 }}>
                <p>Dynamic</p>
                <p style={{ fontSize: 16 }}>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1 }}>
                <p>Designer</p>
                <div>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </div>
                <div>
                  Things I enjoy designing:
                  <p>UX, UI, Web, Mobile, Apps, Logos</p>
                </div>
                <div>Design tools:</div>
                <div>
                  <p>Balsamiq Mockups</p>
                  <p>Invision</p>
                  <p>Zeplin</p>
                  <p>Sketch</p>
                  <p>Pen & Paper</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p>Front-end Developer</p>
                <div>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </div>
                <div>
                  Languages I speak:
                  <p>HTML, CSS, Sass, Less</p>
                </div>
                <div>Design tools:</div>
                <div>
                  <p>Balsamiq Mockups</p>
                  <p>Invision</p>
                  <p>Zeplin</p>
                  <p>Sketch</p>
                  <p>Pen & Paper</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p>Back-end Developer</p>
                <div>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </div>
                <div>
                  Languages I speak:
                  <p>Node, Java, PostgreSQL, MongoDB</p>
                </div>
                <div>Design tools:</div>
                <div>
                  <p>Balsamiq Mockups</p>
                  <p>Invision</p>
                  <p>Zeplin</p>
                  <p>Sketch</p>
                  <p>Pen & Paper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
