import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/icons/icons.css";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);




