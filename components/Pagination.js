import React, { useState } from 'react';

const Pagination = ({ count, parentPageChange }) => {
  const totalPages = Math.ceil(count / 10);

  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from(Array(totalPages), (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    parentPageChange(page);
  };
  return (
    <>
      <div className='flex flex-row justify-end m-2 rounded-2xl p-1 '>
        <button
          className={`hover:bg-cyan-500 border font-medium m-1 hover:text-white shadow-lg px-2 text-cyan-500 ${
            currentPage == 1
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer'
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`hover:bg-cyan-500 border font-medium m-1 hover:text-white shadow-lg px-2 text-cyan-500 ${
              page === currentPage && 'bg-slate-500'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`hover:bg-cyan-500 border font-medium m-1 hover:text-white shadow-lg px-2 text-cyan-500 ${
            currentPage === totalPages
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer'
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
