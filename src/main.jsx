import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
// styles

import './Styles/resetCSS.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.scss'
import './Styles/Styles.scss'
import './Styles/MediaQuery.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
