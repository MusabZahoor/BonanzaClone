import React from 'react'
import ProductCard from '../Card/ProductCard.jsx'
import { useSelector } from 'react-redux'


const Men = () => {
  const products = useSelector((state) => state.products);
  const menProducts = products.filter((product) => product.productCategory ==="Men");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {menProducts.map((product) => (
        <ProductCard product={product} />
      ))}
      
    </div>
  )
}

export default Men
