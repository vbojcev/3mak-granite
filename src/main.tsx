import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './styles/App.css';
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'red',
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'red',
        variant: 'outline',
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
