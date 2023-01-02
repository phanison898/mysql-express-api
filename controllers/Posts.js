import con from "./Connection.js";

// CREATE
export const createPost = (req, res) => {
  const { description, media, user_id } = req.body;
  con.query(
    `INSERT INTO posts (description, media, user_id) VALUES (?, ?, ?)`,
    [description, media, user_id],
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
  const { description, media } = req.body;

  let query = null;
  let updatedColumn = null;

  if ((description != undefined) & (media == undefined)) {
    query = `UPDATE posts SET description=? WHERE id=?;`;
    updatedColumn = description;
  } else if ((description == undefined) & (media != undefined)) {
    query = `UPDATE posts SET media=? WHERE id=?;`;
    updatedColumn = media;
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
