import React from 'react';

import { ProductProvider } from "./ProductContext";

import Navbar from "./components/navbar";
import Layout from "./components/layout";

// import ProductList from "./components/productlist";
// import Menu from "./components/menu";

function App() {
  return (
    <ProductProvider>
      <Layout/>
    </ProductProvider>
  );
}

export default App;
