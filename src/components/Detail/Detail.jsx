import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEdificios } from '../../Data/data'
import DetailItem from './DetailItem'
import "./Detail.css"

const Detail = () => {
  const [edificio, setEdificio] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    getEdificios().then(datos=>{
      setEdificio(datos[id])
    })
  },[])
  return (
    <div>
      <DetailItem nombre={edificio.nombre} img={edificio.img}/>
    </div>
  )
}

export default Detail