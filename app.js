const express = require('express');
const app = express();
const multer = require('multer');  // Ensure multer is correctly imported
const upload = require("./config/multer");  // Assuming you have multer setup in 'config/multer.js'

// Correct way to set the view engine
app.set('view engine', 'ejs');

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render the index page
app.get("/", function(req, res) {
    res.render("index");
});

// Handle file upload
app.post('/submit', upload.single('avatar'), (req, res, next) => {
    // Log the uploaded file and form data
    console.log(req.body);
    console.log(req.file); // req.file contains the uploaded file details

    res.send('File uploaded successfully');
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
