import React, { useState, useContext, useEffect } from 'react'

import { v4 } from "uuid";

import { ProductContext } from "../ProductContext";

export default function Navbar() {
  const [,setProducts,,,query,setQuery] = useContext(ProductContext);
  const [value, setValue] = useState("")
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    fetch('https://ikchkii2sd.execute-api.us-west-2.amazonaws.com/?q=' + value)
      .then((res) => res.json())
      .then((res) => {
      const results = res.hits.hits.map(hit => hit._source);
      setProducts(results);})
      .catch((error) => console.error(error))
  },[query]);

  const search = (e) => {
    setQuery(value);
  }

  

  return (
    <div className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">Search Movies</p>
        </div>

        <a role="button" onClick={() => setMenu(!menu)} className={`navbar-burger burger ${menu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <form onSubmit={search} className="field has-addons">
              <p className="control is-expanded">
                <input value={value} type="text" onChange={(e) => setValue(e.target.value)} className="input" />
              </p>
              <p className="control">
                <button className="button is-info has-text-weight-bold">
                  Search
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
