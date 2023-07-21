import React, { Component } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    const handleChange = this.props.handleChange;
    const count = this.props.count;
    return (
      <div>
        <button onMouseOver={handleChange}>Hovered {count} times</button>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
