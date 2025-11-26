import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';

const Sweaters = () => {
  const products = useSelector((state) => state.products);
  const Sweater = products.filter((product) => product.productCategory ==="Sweaters");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {Sweater.map((product) => (
        <ProductCard key={product.productId} product={product} />
      )) }
      </div>
  )
}

export default Sweaters
