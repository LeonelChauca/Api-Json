import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { InfoUser } from './InfoUser';
import { NavMain } from '../containers/NavMain';

export const Detalles = () => {
    const { id ,userId} = useParams();
    const [user, setuser] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then(response => response.json())
            .then(json => setuser(json[0]))
    }, [])
    
  return (
    <>
        <NavMain/>
        <div>
            <InfoUser user={user} id={userId}/>

        </div>
    </>
  )
}
