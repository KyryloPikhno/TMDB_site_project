import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';

import {setupStore} from "./redux";
import {Provider} from "react-redux";
import App from './App';


const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


