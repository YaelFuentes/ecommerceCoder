import './App.css';
import React from 'react'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <React.Fragment>
      <div>
        <NavBar />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 p-5 ml-9 items-center text-center'>
          <ItemListContainer
            listTitle='Articulos Veterinarios'
            listDescription='Lista de articulos , medicamentos, y demas productos para el cuidado de su mascota'
          />
          <ItemListContainer
            listTitle='Alimentos Balanceados'
            listDescription='La mas grande variedad de alimentos balanceados para perros y gatos'
          />
          <ItemListContainer
            listTitle='Analisis medicos'
            listDescription='Analisis y laboratorio para examenes clinicos, radiografias, Ecografias y mas'
          />
          <ItemListContainer
            listTitle='Turnos peluqueria'
            listDescription='Consulte para turnos de peluqueria y reservelo con tiempo'
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
