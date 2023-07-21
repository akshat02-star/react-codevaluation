import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const count = this.props.count;
    const handleChange = this.props.handleChange;
    return (
      <div>
        <button onClick={handleChange}>clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
