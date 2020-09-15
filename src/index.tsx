import React from 'react';
import ReactDOM from 'react-dom';
import './main.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AppSettingsProvider} from './AppSettingsContext';

ReactDOM.render(
  <React.StrictMode>
    <AppSettingsProvider>
        <App/>
    </AppSettingsProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
