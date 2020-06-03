import express, { Request, Response } from "express";

const app = express();

app.get("/users", (request: Request, response: Response) => {
  console.log("asdas");

  response.send("Hello World");
});

app.listen(3333);
