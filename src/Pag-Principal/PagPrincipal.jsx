// PagPrincipal.jsx
import React, { useEffect, useState } from 'react';
import { NavMain } from '../containers/NavMain';
import styles from '../styles/PagPrincipal.module.css';
import { Link } from 'react-router-dom';
import TableComponent from './TableComponent';

export const PagPrincipal = () => {
  const [post, setPost] = useState([]);
  const [buscarTermino, setbuscarTermino] = useState('');
  const [actualPag, setactualPag] = useState(1);
  const datosXpagina = 10;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPost(json));
  }, []);

  const handlePageChange = (page) => {
    setactualPag(page);
  };

  const handleSearch = (event) => {
    setbuscarTermino(event.target.value);
  };
  const filteredData = post.filter((valor) => {
    return (
      valor.title.toLowerCase().includes(buscarTermino.toLowerCase()) ||
      valor.body.toLowerCase().includes(buscarTermino.toLowerCase())
    );
  });

  return (
    <div>
      <NavMain />
      <input 
        type="text" 
        placeholder='Buscar' 
        value={buscarTermino} 
        onChange={handleSearch} 
      />
      <main className={styles.containermain}>
        <TableComponent
          data={filteredData}
          currentPage={actualPag}
          itemsPerPage={datosXpagina}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};
