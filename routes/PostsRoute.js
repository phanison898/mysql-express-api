import express from "express";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controllers/Posts.js";

const route = express.Router();

route.get("/", getPosts);
route.get("/:id", getPost);
route.post("/", createPost);
route.patch("/:id", updatePost);
route.delete("/:id", deletePost);

export default route;
