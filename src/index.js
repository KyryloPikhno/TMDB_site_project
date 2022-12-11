import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./redux";

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

