import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />

    </ThemeProvider>
  );
}

export default App;
