import '@fontsource/eb-garamond/400.css'
import '@fontsource/quicksand/400.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>

);


