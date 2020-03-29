import React, {useContext} from 'react'

import { ProductContext } from "../ProductContext";

import Product from "./product";

export default function ProductList() {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <div>
      <section className="section">
        <div className="container">
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </section>
    </div>
  )
}
