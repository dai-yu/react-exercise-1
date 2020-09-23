import React from 'react';
import PropTypes from 'prop-types';
import './Education.css';

export default class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
