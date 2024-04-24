import React, { useEffect, useState } from 'react'
import { ComentCard } from './ComentCard'
import styles from '../styles/Comentarios.module.css';
export const Comentarios = ({usuario}) => {
    const [coment, setcoment] = useState([])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${usuario}`)
        .then(response => response.json())
        .then(json => setcoment(json))
    }, [])
    
  return (
    <>
        <div className={styles.containerMain}>
        <h2>Comentarios</h2>
        {
            coment.map((valor)=>(
                <ComentCard key={valor.id} comentarios={valor}/>
            ))
        }
        </div>
    </>
    
  )
}
