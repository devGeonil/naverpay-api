import express from "express";

const globalRouter = express.Router();

globalRouter.get("/",(req, res)=> res.render("index"));
globalRouter.get("/login",(req, res)=> res.render("login"));
globalRouter.get("/logout",(req, res)=> res.render("logout"));
globalRouter.get("/search",(req, res)=> res.render("search"));

export default globalRouter;
