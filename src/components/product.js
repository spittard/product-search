import React from 'react'
import ActionLink from './actionlink';

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
          <p class="subtitle is-6">{props.product.fields.plot}</p>
      </div>
    </div>
    <div class="content is-size-7">
        <b>Starring:</b> {props.product.fields.actors.join(', ')}<br/>
        {/* <b>Starring:</b> {props.product.fields.actors.map(value => <ActionLink group="actors" value={value}/>)<br/> */}
        <b>Directed by:</b> {props.product.fields.directors.join(', ')}
        <br/>
        {/* {props.product.fields.plot} */}
    </div>
  </div>
    </div>
  )
}
