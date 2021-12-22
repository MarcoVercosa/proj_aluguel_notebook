import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';

import { Provider } from 'react-redux';
import store from "./store/store"

import Login from './components/homeLogin/Login';
import PainelAdministrativo from "./components/paineladministrativo/painel_home/painelHome"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/paineladministrativo" element={<PainelAdministrativo />} />
      </Routes>

    </Provider>

  </BrowserRouter>,

  document.getElementById('root')
);

