import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Build from './components/buildYourOwn/build'
import Order from './components/orderCuratedBoxes/order';
import Contact from './components/contactMe/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/build",
    element: <Build/>
  },
  {
    path: "/order",
    element: <Order/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
