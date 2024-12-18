const express = require('express');
const app = express();

// Correct way to set the view engine
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", function(req, res) {
    res.send("heloooo");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
