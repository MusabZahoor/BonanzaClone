import React from 'react'
import ProductCard from '../Card/ProductCard';
import { useSelector } from 'react-redux';
const Beauty = () => {
  const products = useSelector((state) => state.products);
  const beautyProducts = products.filter((product) => product.productCategory === "Beauty");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {beautyProducts.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  )
}

export default Beauty
