const request = require("supertest");
const app = require("../../app");

describe("GET /api/people", function () {
  it("responds with json", async function () {
    const resp = await request(app).get("/api/people").send();
    expect(resp.body).toBeInstanceOf(Array);
    expect(resp.statusCode).toEqual(200);
});
