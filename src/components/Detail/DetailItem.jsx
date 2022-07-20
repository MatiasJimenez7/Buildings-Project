import React from 'react'
import { Link } from 'react-router-dom'

const DetailItem = ({img,nombre}) => {
  return (
    <div className='contenido-detail'>
        <div className='caja-principal'>
            <h1>{nombre}</h1>
            <img src={img} alt="" />
        </div>
    
        <div className='caja2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque voluptatum sed quos quaerat, ab perspiciatis commodi quibusdam, deleniti enim sunt. Corporis iure omnis ea quo fuga magni animi iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis minus, aperiam pariatur at incidunt culpa explicabo autem veritatis optio? Debitis perspiciatis quia fuga quibusdam aperiam libero nemo eveniet, voluptatem facilis?</p>
          <Link to="/contact" className='botonCaja2'> 
            <button>Contact</button>
          </Link> 
          
        </div>
        
    </div>
    
  )
}

export default DetailItem