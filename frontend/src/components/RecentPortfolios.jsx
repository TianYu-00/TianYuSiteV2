import React, { useState, useEffect } from "react";
import { fetchPortfolios } from "../api";
import ScrollAnimation from "react-animate-on-scroll";

//#B8D060

export default function RecentPortfolios() {
  const [basePortfolios, setBasePortfolios] = useState([]);
  useEffect(() => {
    fetchPortfolios().then((response) => {
      const firstThreePortfolios = response.slice(0, 3);
      setBasePortfolios(firstThreePortfolios);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-6">
        {basePortfolios.map((portfolio, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } rounded-lg shadow-lg overflow-hidden`}
          >
            <div className="md:w-1/2 overflow-hidden">
              <ScrollAnimation animateIn="bounceInRight">
                <img
                  src="https://picsum.photos/seed/picsum/1920/1080"
                  alt="Portfolio"
                  className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              </ScrollAnimation>
            </div>

            <div className="p-4 md:w-1/2 flex flex-col justify-center">
              <ScrollAnimation animateIn="fadeIn">
                <p className="text-xl font-semibold mb-2">{portfolio.portfolio_name}</p>
                <p className="mb-4">{portfolio.portfolio_short_description}</p>
                <div>
                  {portfolio.portfolio_demo && (
                    <a
                      href={`${portfolio.portfolio_demo}`}
                      className="underline underline-offset-4 hover:underline mr-4 transition duration-500 ease-in-out hover:bg-black hover:text-white p-2"
                    >
                      Demo
                    </a>
                  )}
                  {portfolio.portfolio_github && (
                    <a
                      href={`${portfolio.portfolio_github}`}
                      className="underline underline-offset-4 hover:underline mr-4 transition duration-500 ease-in-out hover:bg-black hover:text-white p-2"
                    >
                      Github
                    </a>
                  )}
                  {portfolio.portfolio_youtube && (
                    <a
                      href={`${portfolio.portfolio_youtube}`}
                      className="underline underline-offset-4 hover:underline mr-4 transition duration-500 ease-in-out hover:bg-black hover:text-white p-2"
                    >
                      YouTube
                    </a>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
