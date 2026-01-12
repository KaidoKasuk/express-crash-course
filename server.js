import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
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

//------------body parser middleware------------//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//------------logger middleware------------//
app.use(logger);

//------------Routes------------//
app.use("/api/posts", posts);

app.listen(port, () => console.log(`server is running port ${port}`));
