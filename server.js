const express = require("express");
const fs = require("fs");

const app = express();

const dataPath = "./data.json";

app.get("/books", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
