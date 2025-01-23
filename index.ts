import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

import Task from "./models/task.model";

dotenv.config();

database.connect();

const app: Express = express();
const port: number = 3000;

app.get("/task", async (req: Request, res: Response) => {
  const tasks = await Task.find({
    deleted: false,
  });

  res.json({
    message: "Lấy danh sách thành công",
    data: tasks,
  });
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
