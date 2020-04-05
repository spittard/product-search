import React from 'react'

export default function Product(props) {
  return (
    <div className="card">
     <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={props.product.fields.image_url} onError={(e)=>{e.target.onerror = null; e.target.src="movie.jpg"}} alt="movie.jpg"/>
        </figure>
      </div>
      <div class="media-content">
          <p class="title is-4">{props.product.fields.title}</p>
      </div>
    </div>
    <div class="content">
        {props.product.fields.plot}
    </div>
  </div>
    </div>
  )
}
