import React, { useState, useContext } from 'react'

import { ProductContext } from "../ProductContext";
import ActionLink from './actionlink';

export default function Menu() {
  const [products, setProducts, filter, setFilter] = useContext(ProductContext);
  
return (
<aside class="menu">
  <p className="menu-label has-text-black">
    Genres
  </p>
  <ul class="menu-list">
    {[...new Set(products.map(product => product.fields.genres[0]))]
        .sort()
        .map(value => (
            <li key={value}><ActionLink group="genres" value={value}/></li>
        ))
    }
  </ul>
  <p class="menu-label">
    Directors
  </p>
  <ul class="menu-list">
  {[...new Set(products.map(product => product.fields.directors[0]))]
        .sort()
        .map(value => (
            <li><ActionLink group="directors" value={value}/></li>
        ))
    } 
  </ul>
  <p class="menu-label">
    Actors
  </p>
  <ul class="menu-list">
  {[...new Set(products.map(product => product.fields.actors[0]))]
        .sort()
        .map(value => (
            <li><ActionLink group="actors" value={value}/></li>
        ))
    } 
  </ul> 
  
</aside>
  )
}
