import React, {useContext} from 'react'

import { ProductContext } from "../ProductContext";

import Product from "./product";

export default function ProductList() {
  const [products,,filter,setFilter] = useContext(ProductContext);

  return (
    <div>
      <section className="section">
        <div className="container">
          {
          filter === undefined?
            products.map(product => (
                <Product key={product.id} product={product}/>
          )) :
            products.filter(product => product.fields[filter.group].includes(filter.value))
                .map(product => (
                    <Product key={product.id} product={product}/>
          ))
          }
        </div>
      </section>
    </div>
  )
}
