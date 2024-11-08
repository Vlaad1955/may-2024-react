import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./browserRouter/Router";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./mystore/store/myStore";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
    </Provider>
);


