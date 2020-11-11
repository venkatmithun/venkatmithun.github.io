import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "", email: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();

    this.callBackendAPI(this.state.name, this.state.email, this.state.message)
      .then((res) => {
        // this.setState({ data: res.express }, () => console.log(this.state.data))
      })
      .catch((err) => console.log(err));
  }

  callBackendAPI = async (name, email, msg) => {
    const response = await fetch("/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, msg }),
    });
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    // return body;
  };

  render() {
    return (
      <div id="Contact" className="App-header">
        <h1>Contact!</h1>
        <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="venkatmithun"><a class="LI-simple-link" href='https://www.linkedin.com/in/venkatmithun?trk=profile-badge'>Venkat Mithun K.</a></div>
        <p>Have a question or want to work together?</p>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleEmailChange}
          />
          <textarea
            value={this.state.message}
            onChange={this.handleMsgChange}
            placeholder="Your Message"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
