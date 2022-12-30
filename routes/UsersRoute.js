import express from "express";

const route = express.Router();

route.get("/");
route.get("/:id");
route.post("/");
route.patch("/:id");
route.delete("/:id");
