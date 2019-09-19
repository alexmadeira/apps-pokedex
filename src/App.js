import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

import '~/config/ReactotronConfig';

import Nav from '~/components/Nav';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
