import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  increment,
  decrement,
  reset
} from "../../actions/counter-widget-actions";
import { Button, Container, Row, Col } from "react-bootstrap";

class CounterWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onInc = () => {
    this.props.increment(1);
  };

  onDec = () => {
    this.props.decrement(1);
  };

  onReset = () => {
    this.props.reset(0);
  };

  render() {
    return (
      <Container>
        <Link to="/home">Back to HomePage</Link>
        <Row>
          <Col sm>
            <b>{this.props.value}</b>
          </Col>
          <Col sm>
            <Button variant="primary" onClick={() => this.onInc()}>
              Add
            </Button>
            <Button variant="primary" onClick={() => this.onDec()}>
              Sub
            </Button>
          </Col>
          <Col sm>
            <p onClick={() => this.onReset()}>Reset</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.value };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ increment, decrement, reset }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterWidget);
