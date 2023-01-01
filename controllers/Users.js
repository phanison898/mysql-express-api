import con from "./Connection.js";

export const createUser = (req, res) => {
  const { name, profile_url, bio } = req.body;

  con.query(
    `INSERT INTO users(name, profile_url, bio) VALUES(?,?,?)`,
    [name, profile_url, bio],
    (err, result) => {
      if (err) throw err;
      res.status(200).send("User created successfully");
    }
  );
};

export const getUser = (req, res) => {
  const id = req.params.id;
  con.query(`SELECT * FROM users WHERE id=?`, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  con.query(`DELETE FROM users WHERE id=?`, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send("User deleted successfully");
  });
};
