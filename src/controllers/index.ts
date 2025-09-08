import { Request, Response } from "express";

class IndexController {
  public getIndex(_: Request, res: Response) {
    res.send("Welcome to the Express Serverless App!");
  }
}

export default IndexController;
