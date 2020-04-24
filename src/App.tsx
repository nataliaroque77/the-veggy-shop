import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import { Provider } from 'react-redux';
import GlobalStyle from './theme/globalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
