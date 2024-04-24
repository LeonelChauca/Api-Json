import React, { useEffect, useState } from 'react'
import styles from '../styles/InfoUser.module.css';
import {User} from '../Pag-Principal/User';
import { ComentCard } from './ComentCard';
import { Comentarios } from './Comentarios';
export const InfoUser = ({user,id}) => {
  return (
    <div className={styles.containerMain}>
        <User usuario={user}/>
        <Comentarios usuario={id}/>
    </div>
  )
}
