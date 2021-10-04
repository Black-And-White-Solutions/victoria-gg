import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { size } from './assets/mediaSizes';

const { tablet } = size;

const GlobalStyles = createGlobalStyle`
	* {
	  box-sizing: border-box;
	  padding: 0;
		margin: 0;
	}
	body {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(235, 158, 202, 0.15) 100%), #F8F8F8;
	  color: rgb(0, 0, 0);
		font-family: 'Lora', 'Dancing Script', 'Playfair Display', serif, cursive;
		-webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-style: normal;
	  font-weight: normal;
	  word-wrap: normal;

		@media screen and (max-width: ${tablet}) {
			::-webkit-scrollbar {
				display: none;
			}
		}
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
      crossOrigin="annonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
