import React from 'react'
import { Link } from 'react-router-dom'

const ItemListContainer = ({ listTitle, listDescription, category }) => {
  return (
    <Link to={`/articulos/${category}}`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{listTitle}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{listDescription}</p>
    </Link>
  )
}

export default ItemListContainer;