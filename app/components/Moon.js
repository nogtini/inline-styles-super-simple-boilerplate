import React from "react";
import Radium from "radium";

@Radium
export default class World extends React.Component {
  render () {
    return (
      <span style={styles.base}>
        Moon!
      </span>
    );
  };
}

var styles = {
  base: {
    background: 'mintCream',
    color: 'mediumBlue',
    border: '2px dashed blue',
    borderRadius: 50,
    padding: '1em',
    ':hover': {
      background: 'khaki'
    }
  }
};
