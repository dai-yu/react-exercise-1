import React from 'react';
import PropTypes from 'prop-types';

export default class Time extends React.Component {
  render() {
    return (
      <div className="time">
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

Time.propTypes = {
  time: PropTypes.string.isRequired,
};
