import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(191deg, rgba(2,0,36,1) 0%, rgba(194,93,200,0.9668242296918768) 28%, rgba(154,210,222,1) 76%);
  }
`


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <GlobalStyle/>
          <Game />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
