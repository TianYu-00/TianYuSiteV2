import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api";
import Pagination from "../components/Pagination";

export default function Portfolios() {
  const [basePortfolios, setBasePortfolios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchPortfolios().then((response) => {
      setBasePortfolios(response);
    });
  }, []);

  const totalPages = Math.ceil(basePortfolios.length / itemsPerPage);
  const indexOfLastPortfolio_Current = currentPage * itemsPerPage;
  const indexOfFirstPortfolio_Current = indexOfLastPortfolio_Current - itemsPerPage;

  const currentPortfolios = basePortfolios.slice(indexOfFirstPortfolio_Current, indexOfLastPortfolio_Current);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="border pb-4">
      <h1 className="border font-bold p-4">Portfolios</h1>
      <div className="border">
        {currentPortfolios.map((portfolio) => (
          <p key={portfolio.id}>{portfolio.portfolio_name}</p>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
