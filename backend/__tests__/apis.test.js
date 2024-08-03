const { app, request, db, seed, data } = require("../testIndex");
afterAll(() => {
  return db.end();
});

beforeEach(() => {
  return seed(data);
});

describe("GET api/", () => {
  test("should return 404, with message indicating the route is not found", () => {
    return request(app)
      .get("/notvalid")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("ROUTE NOT FOUND");
      });
  });

  test("should return a 200 status code, indicating the endpoint is accessible", () => {
    return request(app).get("/api").expect(200);
  });
});
