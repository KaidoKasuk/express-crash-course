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
  res.json(posts);
});

//get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`server is running port ${port}`));
