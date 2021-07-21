import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

// Import theme default
import theme from './theme';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
