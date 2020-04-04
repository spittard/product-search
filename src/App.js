import React, { useContext } from 'react';

import { ProductProvider } from "./ProductContext";
import { ProductContext } from "./ProductContext";

import Layout from "./components/layout";

function App() {
  return (
    <ProductProvider>
      <Layout/>
    </ProductProvider>
  );
}

export default App;
