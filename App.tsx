import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/resources/theme';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;

