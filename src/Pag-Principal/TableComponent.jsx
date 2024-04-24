// TableComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PagPrincipal.module.css';


const TableComponent = ({ data, currentPage, itemsPerPage, onPageChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Titulo</th>
            <th>Contenido</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((valor, index) => (
            <tr key={index}>
              <td width={'1%'} align='center'>{startIndex + index + 1}</td>
              <td width={'30%'}>{valor.title}</td>
              <td width={'60%'}>{valor.body}</td>
              <td width={'9%'}>
                <Link to={`/detalles/${valor.id}/${valor.userId}`}>
                  <button>Detalles</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= data.length}>Siguiente</button>
      </div>
    </div>
  );
};

export default TableComponent;
