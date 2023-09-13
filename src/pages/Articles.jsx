import React, { useEffect, useState } from 'react';
import { getProducts } from '../components/Mocks/Mocks';
import {Link} from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
      .then((product) => setArticles(product))
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false))
  }, []);

  if (loading) return <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">
    Cargando listado de productos...
  </p>

  
  return (
    <div class="grid grid-cols-3 gap-4">
      {
        articles.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-lg">$ {item.price}</p>
              <Link to={`/products/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver Mas
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Articles;


/* {
  articles.map((item, index) => (
    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-lg">$ {item.price}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  ))
} */
