import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./styles.scss";

class LandingPage extends Component {
  navigateToDashBoard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <Container>
        <div>
          <div className="bgimg">
            <div className="carousel-caption d-md-block">
              <h2 className="display-4">Welcome Raghu</h2>
              <p className="lead" onClick={() => this.navigateToDashBoard()}>
                Click here to navigate to Dashboard
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default LandingPage;
