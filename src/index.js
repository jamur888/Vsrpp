import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/store';


ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
  );