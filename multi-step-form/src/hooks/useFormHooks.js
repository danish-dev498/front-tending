import React, { useState } from 'react';

const useFormHooks = (formSteps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const previousPage = () => {
    if (currentPage === 0) return;

    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    if (currentPage === formSteps - 1) return;

    setCurrentPage((prev) => prev + 1);
  };

  return {
    previousPage,
    nextPage,
    currentPage,
  };
};

export default useFormHooks;
