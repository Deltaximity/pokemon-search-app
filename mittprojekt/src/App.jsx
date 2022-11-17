import { Component } from 'react';
import UIRoot from './components/UIRoot';
import './styles/main.css';

import { BrowserRouter, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UIRoot />
      </BrowserRouter>
    );
  }
}

export default App;