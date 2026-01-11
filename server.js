const express = require("express");
const path = require("path");

const app = express();
//------------first version------------//
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(8000, () => console.log("server is running port 8000"));
