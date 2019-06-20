import * as express from "express";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

let server = app.listen(3010, function () {
  console.log("Example app listening on port 3010!");
});

export { app, server };
