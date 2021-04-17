import react, { Component } from "react";
import fire from "../config/Fire";

class login extends Component {
  // constructing the class from the react component
  constructor(props) {
    super(props);

    // initial state of the form
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true
    };
  }

  login = (e) => {
    // stop from reloading the page
    e.preventDefault();
  };
}
