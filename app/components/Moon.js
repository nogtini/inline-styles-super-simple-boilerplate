// from App
import React from 'react';
import styles from './moon.scss';

export default class Moon extends React.Component {
  render() {
    return (
      <span className={ styles.moon }>
        Moon!
      </span>
    );
  }
}
