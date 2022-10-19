import '@fontsource/eb-garamond/400.css'
import '@fontsource/quicksand/400.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import theme from './theme/theme';
import Auth0ProviderWithConfig from './auth/authProviderWithConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Auth0ProviderWithConfig>
          <App />
        </Auth0ProviderWithConfig>
      </BrowserRouter>
    </ChakraProvider>
  </Provider >

);


