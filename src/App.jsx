import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Inicio } from './inicio';
import { Blog } from './blog';

import logo from './assets/logo1.png';
import './App.css'

function App() {
  return (
    <Router>
      <header className='header'>
        <div className='header-logo'>
          <img src={logo} alt="" />
          <h1>Colegio Mejillones B</h1>
        </div>
        <nav className='menu'>
          <Link to='/' className='active'>Inicio</Link>
          <Link to='/'>Nosotros</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
      </header>

      <main className='main'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </main>

      <footer className='footer'>
        <p>&copy; 2023 Todos los derechos reservados.</p>
      </footer>
  </Router>
  );
}

export default App;

