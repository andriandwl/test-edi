import User from "../models/usersModel.js";
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "andriandwi123",
  port: 4128,
});

export const getUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users ORDER BY id DESC");
    res.status(200).json(users.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const createUsers = async (req, res) => {
  const { namalengkap, username, password, status } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (namalengkap, username, password, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [namalengkap, username, password, status]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

export const editUsers = async (req, res) => {
  try {
    await User.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          nama: req.body.namalengkap,
          username: req.body.username,
          password: req.body.password,
          status: req.body.status,
        },
      }
    );
  } catch (error) {
    alert(error.message);
  }
};

export const deleteUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Item not found." });
    } else {
      res.json({ message: "Item deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};
