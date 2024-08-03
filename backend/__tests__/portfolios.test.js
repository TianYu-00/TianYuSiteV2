const { app, request, db, seed, data } = require("../testIndex");
require("jest-sorted");

afterAll(() => {
  return db.end();
});

beforeEach(() => {
  return seed(data);
});

describe("GET api/portfolios", () => {
  test("should return 404, with message indicating the route is not found", () => {
    return request(app)
      .get("/api/invalidPath")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("ROUTE NOT FOUND");
      });
  });

  test("should return a 200 status code, indicating the endpoint is accessible", () => {
    return request(app).get("/api/portfolios").expect(200);
  });

  test("should handle invalid query", () => {
    return request(app)
      .get("/api/portfolios?invalidQuery")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toEqual("BAD REQUEST");
      });
  });

  test("should handle invalid query term", () => {
    return request(app)
      .get("/api/portfolios?sort_by=invalidTerm")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toEqual("BAD REQUEST");
      });
  });

  test("Should accept 'order_by' as a query and return results ordered by portfolio_start_date in desc order by default", () => {
    return request(app)
      .get("/api/portfolios?sort_by=portfolio_start_date")
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeSortedBy("portfolio_start_date", { descending: true });
      });
  });

  test("Should accept 'order' as a query and return results ordered in desc order", () => {
    return request(app)
      .get("/api/portfolios?order=desc")
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeSortedBy("portfolio_start_date", { descending: true });
      });
  });

  test("Should accept 'order' as a query and return results ordered in asc order", () => {
    return request(app)
      .get("/api/portfolios?order=asc")
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeSortedBy("portfolio_start_date", { descending: false });
      });
  });
});
