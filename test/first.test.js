import request from "supertest";
import { app, server } from "../src/index";

afterEach(() => {
  server.close();
});

test("adds 1 + 2 to equal 3", () => {
  expect(1).toBe(1);
});

test("Deve chamar a aplicação", done => {
  request(app)
    .get("/")
    .expect(200)
    .end(done);
});
