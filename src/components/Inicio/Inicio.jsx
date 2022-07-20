import React from 'react'
import "./Inicio.css"
import { getEdificios } from '../../Data/data'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item'

const Inicio = () => {
  const [edificios, setEdificios] = useState([])
  
  useEffect(()=>{
    getEdificios().then(datos=>{
      setEdificios(datos)
    })
  },[])
  return (
    <div className='contenido-principal'>
      {edificios.map(cosas=>(
        <Item nombre={cosas.nombre} img={cosas.img} id={cosas.id} />
      ))}
    </div>
  )
}

export default Inicio;