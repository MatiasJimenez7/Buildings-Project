import React from 'react'
import { Link } from 'react-router-dom'

import "./Item.css"


const Item = ({id,img,nombre}) => {
  const url = `/detail/${id}`
  
  return (
    <div>
      <Link className='dios' to={url}>
        <div className='contenedor'>
          <img src={img} alt="image" />
          <h2>{nombre}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Item;