import React, { useState, useContext } from 'react'

import { ProductContext } from "../ProductContext";
import ActionLink from './actionlink';
import ProductModel from '../ProductsModel';

export default function Menu() {
  const [products] = useContext(ProductContext);
  const model = new ProductModel(products);
  const genres = model.genres();
  const directors = model.directors();
  const actors = model.actors();

return (
<aside class="menu">
  <p className="menu-label has-text-black">
    Genres
  </p>
  <ul class="menu-list">
     { genres
        .map(value => (
            <li key={value}><ActionLink group="genres" value={value}/></li>
        ))
    }
  </ul>
  <p class="menu-label">
    Directors
  </p>
  <ul class="menu-list">
      {
        directors
        .map(value => (
            <li><ActionLink group="directors" value={value}/></li>
        ))
    } 
  </ul>
  <p class="menu-label">
    Actors
  </p>
  <ul class="menu-list">
      {
        actors
        .map(value => (
            <li><ActionLink group="actors" value={value}/></li>
        ))
    } 
  </ul> 
  
</aside>
  )
}
