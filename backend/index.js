import express from "express";
import dotenv from "dotenv";
const app = express();
import notes from "./data/notes.js";

dotenv.config();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/notes", (req, res) => {
  res.json(notes);
});
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
