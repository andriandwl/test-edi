import express from "express";
import {
  createUsers,
  editUsers,
  getUsers,
  deleteUsers,
  getUserById,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUsers);
router.put("/", editUsers);
router.delete("/:id", deleteUsers);

export default router;
