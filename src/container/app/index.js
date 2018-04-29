import React from 'react';

import Header from 'container/header';
import TopMovies from 'container/topMovies';
import AllMovies from 'container/allMovies';

import { Container } from 'components/grid';

const App = () => (
  <Container>
    <Header />
    <TopMovies />
    <AllMovies />
  </Container>
);

export default App;
