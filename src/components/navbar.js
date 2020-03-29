import React, { useState, useContext } from 'react'

import { v4 } from "uuid";

import { ProductContext } from "../ProductContext";

export default function Navbar() {
  const [value, setValue] = useState("")
  const [menu, setMenu] = useState(false)

  const search = (e) => {
//     e.preventDefault()
//     setTodos([...todos, {
//       "id": v4(),
//       "value": value,
//       "done": false
//     }])
//     setValue("")
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
