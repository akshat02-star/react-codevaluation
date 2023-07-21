import React, { Component } from "react";

function withCounter(OldComponent) {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleChange = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <OldComponent
          count={this.state.count}
          handleChange={this.handleChange}
        />
      );
    }
  }
  return NewComponent;
}

export default withCounter;
