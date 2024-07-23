import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api";

export default function Portfolios() {
  const [basePortfolios, setBasePortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios().then((response) => {
      setBasePortfolios(response);
    });
  }, []);
  console.log(basePortfolios);
  return (
    <div className="border pb-4">
      <h1 className="border font-bold p-4">Portfolios</h1>
      <div className="border">
        {basePortfolios.map((portfolio) => {
          return (
            <>
              <p>{portfolio.portfolio_name}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
