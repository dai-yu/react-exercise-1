import React from 'react';
import './Avatar.css';
import img from '../../assets/avatar.jpg';

class Avatar extends React.Component {
  render() {
    return <img src={img} className="avatar" alt="avatar"></img>;
  }
}

export { Avatar };
