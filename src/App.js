import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ProductById from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/articulos' element={<Articles />}/>
            <Route path='/products/:id' element={<ProductById />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
