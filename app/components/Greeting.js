import React from "react";
import Radium from "radium";
import Moon from "./Moon";

@Radium
class Greeting extends React.Component {
  render () {
    return (
      <div style={styles.base}>
        Hello, {this.props.name}! and hello <Moon/>
      </div>
    );
  };
}

var styles = {
  base: {
    paddingTop: '50px',
    border: '2px dotted lightGray',
  }
};

React.render(<Greeting name="World"/>, document.body);
