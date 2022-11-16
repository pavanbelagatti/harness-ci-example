const express = require("express");
const app = express();

app.use(require('express-status-monitor')())

app.get("/hello", (_req, res) =>  {
  res.status(200).send("Hello World!")
})
module.exports = app;
