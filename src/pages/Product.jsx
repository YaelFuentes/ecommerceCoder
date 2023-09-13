import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../components/Mocks/Mocks';

const ProductById = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    getProductById(Number(id))
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => console.log({ err }))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading)
    return (
      <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">
        Loading product ...
      </p>
    );
  return (
    <>
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
          <p class="mb-2 font-normal text-gray-700 dark:text-gray-400 text-center mt-5 p-2">$ {product.price}</p>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Agregar al carrito
          </button>
        </div>
      </a>
    </>
  )
}

export default ProductById;