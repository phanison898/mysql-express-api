import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./controllers/Connection.js";
import postsRouter from "./routes/PostsRoute.js";
import usersRouter from "./routes/UsersRoute.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.MYSQL_PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to Node-MySQL-API");
});

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to MySQL database");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
