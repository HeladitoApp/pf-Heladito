import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './A
import { Provider } from "react-redux"
import store from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react';
import {Provider} from "react-redux"
import store from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
      <App />
  </Provider>
);


