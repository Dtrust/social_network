import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import {ThemeProvider} from '@material-ui/core';

import App from './App';
import { store } from './store/store';
import {theme} from './theme';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);