import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';

const Unstitched = () => {
  const products = useSelector((state) => state.products);
  const unstitchedProducts = products.filter((product) => product.productCategory ==="Unstitch");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {unstitchedProducts.map((product) => (
        <ProductCard product={product} />
      ))}
      </div>
  )
}

export default Unstitched
