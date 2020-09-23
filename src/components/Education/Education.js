import React from 'react';
import Time from './Time';
import PropTypes from 'prop-types';
import Description from './Description';

export default class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <Time time={this.props.time} />
        <Description
          title={this.props.title}
          description={this.props.description}
        />
      </div>
    );
  }
}
Education.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
