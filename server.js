require('dotenv').config()
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Define the path to your static files (like HTML, CSS, and images)
const publicPath = path.join(__dirname, "public");

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT // Use a different port for MySQL
});

// Define a route to serve your index file
app.all("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/pdf/:filename", (req, res) => {
  const pdfFileName = req.params.filename;
  const decodedFileName = decodeURIComponent(pdfFileName); // Decode the filename
  const pdfFilePath = path.join(__dirname, "public", "pdfs", decodedFileName);
  res.sendFile(pdfFilePath);
});

app.post("/contact", (req, res) => {
  let { name, email, project, message } = req.body;
  let id = uuidv4();
  let q = `INSERT INTO contact (id, name, email, project, message) VALUES (?, ?, ?, ?, ?)`;
  let values = [id, name, email, project, message];

  try {
    connection.query(q, values, (err, result) => {
      if (err) throw err;
      console.log("Sent message successfully");
      res.redirect("/");
    });
  } catch (err) {
    console.error(err);
    res.send("Some error occurred");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
