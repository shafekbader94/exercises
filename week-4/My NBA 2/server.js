const express = require("express");
const path = require("path");

const api = require('./server/routes/api')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 3000;



app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use('/', api)



app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
