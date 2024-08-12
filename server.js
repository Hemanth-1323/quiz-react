/* const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
 */

const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router(
  path.join(__dirname, "data", "questions.json")
);
const middlewares = jsonServer.defaults();

// Serve static files from the React app
server.use(express.static(path.join(__dirname, "build")));

// API routes (serve questions from /questions)
server.use("/questions", middlewares, router);

// Serve the React frontend for any other routes
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
