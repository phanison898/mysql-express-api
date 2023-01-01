import express from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/Users.js";

const route = express.Router();

route.get("/:id", getUser);
route.post("/", createUser);
route.patch("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;
