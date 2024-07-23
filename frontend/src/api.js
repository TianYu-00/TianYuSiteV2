import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolioapi.tianyu00.com/api",
});

export const fetchPortfolios = () => {
  return api
    .get("/portfolios")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
