import express from "express";
const userRouter = express.Router();

import {
  userLogin,
  userRegistration,
  changePassword,
} from "../controllers/userController.js";

userRouter.route("/login").post(userLogin);
userRouter.route("/register").post(userRegistration);
userRouter.route("/changePassword").put(changePassword);

export default userRouter;
