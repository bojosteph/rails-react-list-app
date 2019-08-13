import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Hello Hiplyst</h1>
      </header>
      <ListsContainer />
    </div>
  );
}

export default App;
