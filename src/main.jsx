import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'sweetalert2/dist/sweetalert2.min.css';
import '@sweetalert2/theme-dark/dark.css';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources:{
    es : {
      global: global_es
    },
    en : {
      global: global_en
    },
    pt : {
      global: global_pt
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />    
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
