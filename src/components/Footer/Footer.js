import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import fire from "../../Firebase/Fire";

library.add(faGithub);

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <div className="footer">
        <AppBar
          position="static"
          color="default"
          style={{ backgroundColor: "rgb(40, 40, 39)", height: "90px" }}
        >
          <div style={{ color: "white" }}>
            <div>
              <a
                href="https://github.com/juliapetrosyan"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="https://github.com/juliapetrosyan"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="https://github.com/juliapetrosyan"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                {this.state.user ? "Login" : "My Profile"}{" "}
              </a>
            </div>
          </div>
            <div variant="h6" color="inherit" style={{ color: "white" }}>
              © {new Date().getFullYear()} All Rights Reserved. Design By
              AlcoStore.
            </div>
        </AppBar>
      </div>
    );
  }
}

export default Footer;
