import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
	* {
	  box-sizing: border-box;
	  padding: 0;
		margin: 0;
	}
	body {
	  color: rgb(0, 0, 0);
		font-family: 'Inter', 'Lato', sans-serif;
		-webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-style: normal;
	  font-weight: normal;
	  word-wrap: normal;
	}

	p {
		text-align: justify;
	  text-justify: inter-word;
	}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
