import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import TabBar from './components/tabbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>     
            <TabBar />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
