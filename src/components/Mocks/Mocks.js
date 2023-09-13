const Articles = [
  {
    "id": 1,
    "title": "Alimento para gatos premium",
    "price": 15.99,
    "description": "Un alimento de alta calidad formulado específicamente para las necesidades nutricionales de los gatos.",
    "category": "Alimentos para mascotas",
    "image": "https://example.com/images/alimento-gatos.jpg"
  },
  {
    "id": 2,
    "title": "Collar antipulgas y garrapatas para perros",
    "price": 9.99,
    "description": "Un collar eficaz que protege a tu perro de pulgas y garrapatas durante varios meses.",
    "category": "Control de parásitos",
    "image": "https://example.com/images/collar-antipulgas.jpg"
  },
  {
    "id": 3,
    "title": "Shampoo hipoalergénico para mascotas",
    "price": 12.99,
    "description": "Un shampoo suave y hipoalergénico diseñado para mascotas con piel sensible.",
    "category": "Cuidado de la piel",
    "image": "https://example.com/images/shampoo-hipoalergenico.jpg"
  },
  {
    "id": 4,
    "title": "Juguetes para gatos surtidos",
    "price": 8.99,
    "description": "Un conjunto de juguetes variados para mantener a tu gato entretenido y activo.",
    "category": "Juguetes para mascotas",
    "image": "https://example.com/images/juguetes-gatos.jpg"
  },
  {
    "id": 5,
    "title": "Cama ortopédica para perros grandes",
    "price": 34.99,
    "description": "Una cama cómoda y ortopédica diseñada para perros grandes y con problemas articulares.",
    "category": "Camas para mascotas",
    "image": "https://example.com/images/cama-ortopedica.jpg"
  },
  {
    "id": 6,
    "title": "Suplemento vitamínico para perros",
    "price": 19.99,
    "description": "Un suplemento vitamínico que ayuda a mantener la salud y vitalidad de tu perro.",
    "category": "Suplementos nutricionales",
    "image": "https://example.com/images/suplemento-vitaminico.jpg"
  },
  {
    "id": 7,
    "title": "Jaula para pájaros con accesorios",
    "price": 49.99,
    "description": "Una jaula espaciosa y completa con accesorios para aves pequeñas como canarios o periquitos.",
    "category": "Jaulas para aves",
    "image": "https://example.com/images/jaula-aves.jpg"
  },
  {
    "id": 8,
    "title": "Correa retráctil para perros",
    "price": 14.99,
    "description": "Una correa retráctil que brinda libertad y control mientras paseas a tu perro.",
    "category": "Accesorios para perros",
    "image": "https://example.com/images/correa-retractil.jpg"
  },
  {
    "id": 9,
    "title": "Cepillo de dientes para mascotas",
    "price": 5.99,
    "description": "Un cepillo de dientes diseñado para limpiar los dientes de perros y gatos.",
    "category": "Cuidado dental",
    "image": "https://example.com/images/cepillo-dientes.jpg"
  },
  {
    "id": 10,
    "title": "Antibiótico para peces de acuario",
    "price": 7.99,
    "description": "Un tratamiento eficaz para combatir infecciones en peces de acuario.",
    "category": "Cuidado de peces",
    "image": "https://example.com/images/antibiotico-peces.jpg"
  }
]

export const getProducts = (category) => {
  return new Promise((resolve) => {

    setTimeout(() => {
      if (!category) return resolve(Articles)
      return resolve(Articles.filter(product => product.category === category))
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = Articles.find((p) => p.id === id)
      if (product) return resolve(product)
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject({ error: 'No encontrado' })
    }, 500)
  })
}