import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.post("/api/v1/signup", (req, res) => {
  res.send("Signup endpoint");
});

app.post("/api/v1/signin", (req, res) => {
  res.send("Signin endpoint");
});

app.post("/api/v1/content", (req, res) => {
  res.send("Add content");
});

app.get("/api/v1/content", (req, res) => {
  res.send("Get content");
});

app.delete("/api/v1/content", (req, res) => {
  res.send("Delete content");
});

app.post("/api/v1/brain/share", (req, res) => {
  res.send("Share brain data");
});

app.get("/api/v1/brain/:shareLink", (req, res) => {
  res.send(`View brain data with share link: ${req.params.shareLink}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
