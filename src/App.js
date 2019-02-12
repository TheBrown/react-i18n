import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import i18n from 'i18next';

// translation Category
import resources from './catalog-en.json';

// initialize i18next with catalog and language to use
i18n.init({
  resources,
  lng: 'en'
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{i18n.t('welcome')}</h1>
          <button style={{ padding: '8px 16px', borderRadius: 4, fontSize: " 1.26rem" }}>lo</button>
        </header>
      </div>
    );
  }
}

export default App;
