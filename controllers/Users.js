import con from "./Connection";

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
