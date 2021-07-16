import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, store2 } from './store/store';
console.log(store2.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store2}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
 * Context - 1>function to add product to cart, 2> Product list
 * Dashboard - Fetched product list [], 
 *  ProductList- Displays the list of products <Product />[]
 *    Product - Display the Product data 
 *      AddToCartButton - Select number of items
 * 
 */