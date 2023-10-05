import React from 'react';
import ItemListContainer from '../ItemListContainer';

const ItemList = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 p-5 ml-9 items-center text-center'>
        <ItemListContainer
          listTitle='Articulos Veterinarios'
          listDescription='Lista de articulos , medicamentos, y demas productos para el cuidado de su mascota'
          category={'accesorios'}
        />
        <ItemListContainer
          listTitle='Alimentos Balanceados'
          listDescription='La mas grande variedad de alimentos balanceados para perros y gatos'
          category={'alimentos'}
        />
        <ItemListContainer
          listTitle='Analisis medicos'
          listDescription='Analisis y laboratorio para examenes clinicos, radiografias, Ecografias y mas'
          category={'medicina'}
        />
      </div>
    </>
  )
}

export default ItemList;