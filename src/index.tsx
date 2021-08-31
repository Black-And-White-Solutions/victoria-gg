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
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(235, 158, 202, 0.15) 100%), #F8F8F8;
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
