import React, { Component } from 'react';
import { Avatar } from './components/Avatar/Avatar';
import './App.scss';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Avatar></Avatar>
        <Content></Content>
      </main>
    );
  }
}

export default App;
