import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.MYSQL_PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello! Welcome to Node-MySQL-API");
});

app.get("/posts", (req, res) => {
  con.query("SELECT * FROM posts", (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.get("/users", (req, res) => {
  con.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM users WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.post("/", (req, res) => {
  const { name, profile_url, bio } = req.body;
  con.query(
    `INSERT INTO users (name, profile_url, bio) VALUES (?, ?, ?)`,
    [name, profile_url, bio],
    (err, result) => {
      if (err) throw err;
      res.status(200).send(`Hello ${name}! Your details are uploaded Successfully`);
    }
  );
});

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to MySQL database");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
