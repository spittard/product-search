import React, { useState, useContext } from 'react'

import { ProductContext } from "../ProductContext";
import ActionLink from './actionlink';

export default function Menu() {
  const [products, setProducts, filter, setFilter] = useContext(ProductContext)
//   const [menu, setMenu] = useState(false)
//   const [value, setValue] = useState("")

    const onFilterClick = function (key, value){
        setFilter((product) => product.fields[key][0] === value);
    }
return (

<aside class="menu">
  <p className="menu-label has-text-black">
    Genres
  </p>
  <ul class="menu-list">
    {products.map(product => (
        <li><a>{product.fields.genres[0]}</a></li>
    ))} 
    {/* <li><a>Dashboard</a></li>
    <li><a>Customers</a></li> */}
  </ul>
  <p class="menu-label">
    Directors
  </p>
  <ul class="menu-list">
    {products.map(product => (
        <li><a>{product.fields.directors[0]}</a></li>
    ))} 
    {/* <li><a>Dashboard</a></li>
    <li><a>Customers</a></li> */}
  </ul>
  <p class="menu-label">
    Actors
  </p>
  <ul class="menu-list">
    {products.map(product => (
        <div>
        <li><ActionLink group="actors" product={product}/></li>
        {/* <button onClick={product.bind(this, product)} className="button has-text-weight-bold">actor</button> */}
        {/* <button onClick={onFilterClick.bind(this, 'actors', product.fields.actors[0])} className="button has-text-weight-bold">actor</button> */}
        </div>
    ))} 
  </ul> 
  {/* <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul> */}
</aside>
  )
}
