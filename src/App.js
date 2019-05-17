import React, { Component } from 'react';

import { Layout, Header } from './Layout.components';
import CardGameBoard from './CardGameBoard';
import LastResults from './LastResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Join our card game!</Header>
        <Layout>
          <CardGameBoard />
          <LastResults />
        </Layout>
      </div>
    );
  }
}

export default App;
