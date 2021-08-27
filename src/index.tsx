import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');	
	:root() {
	  box-sizing: border-box;
	  padding: 0;
		margin: 0;
	}
	body {
	  color: rgb(0, 0, 0);
		font-family: 'Inter', 'Dancing Script', sans-serif, cursive;
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
