import con from "./Connection.js";

export const createUser = (req, res) => {
  const { first_name, last_name, email, password, confirm_password, profile_pic } = req.body;

  con.query(
    `INSERT INTO users(name, profile_url, bio) VALUES(?,?,?)`,
    [first_name, last_name, email, password, profile_pic],
    (err, result) => {
      if (err) throw err;
      res.status(200).send({ message: "User created successfully", username: first_name });
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
