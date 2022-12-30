import express from "express";
import con from "./Connection";

// CREATE
export const createPost = (req, res) => {
  const { description, image_url, user_id } = req.body;
  con.query(
    `INSERT INTO posts (description, image_url, user_id) VALUES (?, ?, ?)`,
    [description, image_url, user_id],
    (err, result) => {
      if (err) throw err;
      res.status(200).send(`Post uploaded Successfully`);
    }
  );
};

// READ
export const getPosts = (req, res) => {
  con.query("SELECT * FROM posts", (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
};

// READ
export const getPost = (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM posts WHERE id=${id}`, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
};

// UPDATE
export const updatePost = (req, res) => {
  const id = req.params.id;
  const { description, image_url } = req.body;

  let query = null;
  let updatedColumn = null;

  if ((description != undefined) & (image_url == undefined)) {
    query = `UPDATE posts SET description=? WHERE id=?;`;
    updatedColumn = description;
  } else if ((description == undefined) & (image_url != undefined)) {
    query = `UPDATE posts SET image_url=? WHERE id=?;`;
    updatedColumn = image_url;
  }

  con.query(query, [updatedColumn, id], (err, result) => {
    if (err) throw err;
    res.status(200).send(`Post updated successfully`);
  });
};

// DELETE
export const deletePost = (req, res) => {
  const id = req.params.id;
  con.query(`DELETE FROM posts WHERE id=?`, [id], (err, result) => {
    if (err) throw err.message;
    res.status(200).send("Post deleted successfully");
  });
};
