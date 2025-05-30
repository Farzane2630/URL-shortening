import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store.js"
// styles
import './Styles/resetCSS.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.scss'
import './Styles/Styles.scss'
import './Styles/mediaQuery.scss'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
)
