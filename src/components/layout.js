import React, { useState, useContext } from 'react'

import { v4 } from "uuid";

import { ProductContext } from "../ProductContext";

import ProductList from "./productlist";
import Menu from "./menu";
import Navbar from "./navbar";


export default function Layout() {


  return (
    <div>
        <Navbar/>
        <div class="columns">
            <div class="column is-one-fifth"><Menu/></div>
            <div class="column"><ProductList/></div>
        </div>
    </div>
  )
}
