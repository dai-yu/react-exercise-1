import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Educations from './Educations/Educations';
import './Content.css';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Header></Header>
        <hr></hr>
        <About></About>
        <h1>EDUCATION</h1>
        <Educations></Educations>
      </div>
    );
  }
}
export default Content;
