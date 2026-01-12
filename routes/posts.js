import { error } from "console";
import express from "express";
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

//get all posts (path is now in the server.js at Routes)
router.get("/", getPosts);

//get single post (path is now in the server.js at Routes)
router.get("/:id", getPost);

//create new posts
router.post("/", createPost);

//update posts
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

export default router;
