import React from 'react'
import style from '../styles/ComentCard.module.css';
export const ComentCard = ({comentarios}) => {
  return (
    <div className={style.containerMain}>
        <p>Nombre : {comentarios.name}</p>
        <p>email : {comentarios.email}</p>
        <p>Cuerpo : {comentarios.body}</p>
    </div>
    
  )
}
