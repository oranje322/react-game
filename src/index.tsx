import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {Provider} from 'react-redux';
import {createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
  	min-height: 100vh;
  	overflow: hidden;
    background: url('/img/background.jpg') 0 0/cover no-repeat;
		font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle/>
			<Game/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


reportWebVitals();
