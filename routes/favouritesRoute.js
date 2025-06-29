import express from "express";
import validateToken from "../middleware/validateToken.js";
import { favSave, favDelete } from "../controllers/favouritesController.js";

const favsRoute = express.Router();

favsRoute.use(validateToken);

favsRoute.route("/sf/:uId").post(favSave);
favsRoute.route("/df/:uId").delete(favDelete);

export default favsRoute;
