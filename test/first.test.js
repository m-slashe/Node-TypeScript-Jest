import request from "supertest";
import { app, server } from "../src/index";

test("Deve chamar a aplicação", done => {
  request(app)
    .get("/")
    .expect(200)
    .end(done);
});

afterEach(() => {
  server.close();
});