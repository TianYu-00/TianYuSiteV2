import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api";
import { Glow } from "@codaworks/react-glow";
import BackToTopButton from "../components/BackToTop";

export default function Portfolios() {
  const [basePortfolios, setBasePortfolios] = useState([]);
  const [portfoliosShowing, setPortfoliosShowing] = useState([]);
  const [allowedShowing, setAllowedShowing] = useState(3);
  const [isLoadingPortfolios, setIsLoadingPortfolios] = useState(true);

  useEffect(() => {
    fetchPortfolios().then((response) => {
      setBasePortfolios(response);
      setPortfoliosShowing(response.slice(0, allowedShowing));
      setIsLoadingPortfolios(false);
    });
  }, []);

  useEffect(() => {
    setPortfoliosShowing(basePortfolios.slice(0, allowedShowing));
  }, [allowedShowing]);

  function onClick_ShowMore() {
    setAllowedShowing(allowedShowing + 3);
  }

  if (isLoadingPortfolios) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BackToTopButton></BackToTopButton>
      <Glow>
        <div className="relative flex flex-col items-center px-4 md:px-8 max-w-screen-xl m-auto">
          {/* Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-500/50 glow:bg-green-700/100 h-full" />

          {portfoliosShowing.map((portfolio, index) => {
            const formattedDate = new Date(portfolio.portfolio_start_date).toISOString().split("T")[0];

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center w-full mb-8 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Content */}
                <div
                  className={`relative w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <div className="p-4 rounded-lg shadow-md text-copy-primary text-sm md:text-base border-2 border-border glow:border-green-700/100 bg-card glow:bg-green-500/25">
                    <strong className="block text-base md:text-lg glow:text-green-500/100">
                      {portfolio.portfolio_name}
                    </strong>

                    <p className="mt-2 text-xs md:text-sm">{portfolio.portfolio_short_description}</p>
                    <div className="overflow-hidden my-2">
                      <img
                        src="https://picsum.photos/seed/picsum/1920/1080"
                        alt="Portfolio"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mb-2">
                      {portfolio.portfolio_demo && (
                        <a href={`${portfolio.portfolio_demo}`} className="underline underline-offset-4 mr-4">
                          Demo
                        </a>
                      )}
                      {portfolio.portfolio_github && (
                        <a href={`${portfolio.portfolio_github}`} className="underline underline-offset-4 mr-4">
                          Github
                        </a>
                      )}
                      {portfolio.portfolio_youtube && (
                        <a href={`${portfolio.portfolio_youtube}`} className="underline underline-offset-4 mr-4">
                          YouTube
                        </a>
                      )}
                    </div>
                    <p className="text-copy-primary/35 text-sm">
                      {portfolio.portfolio_project_type} || {formattedDate}
                    </p>
                  </div>

                  {/* Marker */}
                  <div
                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-green-300 glow:bg-green-500/100 rounded-full border-2 md:border-4 border-white ${
                      index % 2 === 0 ? "-right-2 md:-right-3" : "-left-2 md:-left-3"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Glow>

      {portfoliosShowing.length >= allowedShowing ? (
        <button
          className="text-copy-primary border-border border p-2 rounded-2xl m-2 hover:bg-cta-active hover:text-cta-text bg-background"
          onClick={() => onClick_ShowMore()}
        >
          Show More
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
