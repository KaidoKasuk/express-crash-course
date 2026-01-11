const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
//------------first version------------//
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

//------------second version------------//
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });
//------------static version------------//
// //setup static folder
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];
//get all posts
app.get("/api/posts", (req, res) => {
  //   console.log(req.query);
  const limit = parseInt(req.query.limit);
  //is a number?
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

//get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //   res.status(200).json(posts.filter((post) => post.id === id));
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ msg: `a post with id of ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(port, () => console.log(`server is running port ${port}`));
