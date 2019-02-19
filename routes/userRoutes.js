import express from "express";

const userRouter = express.Router();


userRouter.get("/", (req, res) => res.render("index"));
userRouter.get("/edit-profile", (req, res) => res.send("edit-profile"));
userRouter.get("/user-detail", (req, res) => res.send("user-detaile"));
userRouter.get("/change-password", (req, res) => res.send("change-password"));




export default userRouter;
