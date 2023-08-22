//libraries
import express from "express";
import { addControl,connectControl} from "./usersController.js";
const router2 = express.Router();
//add user
router2.post('/user',addControl)
//connect user
router2.post("/check",connectControl)
export { router2};