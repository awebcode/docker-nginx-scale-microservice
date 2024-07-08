
const express = require("express");
const os = require("os");
const cpus= os.cpus().length
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hellos, World"+"Host"+os.hostname()+"CPU"+cpus);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
