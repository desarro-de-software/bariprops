const request = require("supertest");
const app = require("../../app");

describe("GET /api/people", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api/people")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
