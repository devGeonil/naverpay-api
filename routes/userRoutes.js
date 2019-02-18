import express from "express";

const userRouter = express.Router();





userRouter.get("/",(req, res)=> res.render("index"));

export default userRouter;
