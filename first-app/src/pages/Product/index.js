import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return <p>Product id is: {id}</p>;
}

export default Product;
