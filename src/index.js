import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./DefaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme} >
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
