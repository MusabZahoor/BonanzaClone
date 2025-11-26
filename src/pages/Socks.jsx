import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const Socks = () => {
  const products = useSelector((state) => state.products);
  const Socks = products.filter((product) => product.productCategory ==="Socks");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {Socks.map((product) => (
        <ProductCard key={product.productId} product={product} />
      )) }
    </div>
  )
}

export default Socks
