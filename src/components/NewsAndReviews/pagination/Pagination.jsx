import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous" title='Previous page'>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(number)} title={`page ${number} of ${totalPages}`}>{number}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)} aria-label="Next" title='Next page'>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
      <p>Page {currentPage} of {totalPages} pages</p>
    </nav>
  );
};

export default Pagination;
