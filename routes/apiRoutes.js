import express from "express";
import fetch from "node-fetch"

const apiRouter = express.Router();


apiRouter.get("/",(req, res)=> {
  res.render("./apiViews/apiMain");
});


apiRouter.get("/open",(req, res)=> {
  res.render("./apiViews/test");
});

export default apiRouter;
