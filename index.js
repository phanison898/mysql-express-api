import express from "express";
import mysql from "mysql";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to Node-MySQL-API");
});

app.get("/posts", (req, res) => {
  con.query("SELECT * FROM posts", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/users", (req, res) => {
  con.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM users WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

const con = mysql.createConnection({
  host: process.env.CONNECTION_URL,
  user: process.env._USERNAME,
  password: process.env._PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to MySQL database");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
