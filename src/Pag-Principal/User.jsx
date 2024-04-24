import React from 'react'
import style from '../styles/user.module.css'
export const User = ({usuario}) => {
    //console.log(usuario.street.city)
  return (
    <div className={style.containerMain}>
        <h2>Detalle del creador de la publicacion</h2>
            <p>Nombre : {usuario.name}</p>
            <p>Usuario : {usuario.username}</p>
            <p>Email : {usuario.email}</p>
            <p>Celular : {usuario.phone}</p>
    </div>
  )
}
