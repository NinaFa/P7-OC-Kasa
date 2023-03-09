import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Erreur404 from './pages/Erreur404.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering de l'application, avec ses composants <Header /> et <Footer /> ainsi que ses différentes routes
root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/a-propos" element ={<APropos />} />
        <Route path = "/logement/:id" element ={<Logement />} />
        <Route path = "*" element ={<Erreur404 />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
