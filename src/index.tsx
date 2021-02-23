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
    min-height: 100vh;
    background: url(https://sun9-35.userapi.com/impg/n_F3UOoA2bV6DTGiAvSZSYN7q35EDMdFN1dYMA/JW_kt4zbp7I.jpg?size=1366x768&quality=96&proxy=1&sign=c0696e348543088962f0693f25c0dd65&type=album) 0 0/cover no-repeat;
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
