const request = require("supertest");
const app = require("../src/index");

describe("GET /health", () => {
  it("should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});
