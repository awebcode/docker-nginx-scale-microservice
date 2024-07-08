import express from "express";
import os from "os";
const cpus = os.cpus().length;
const app = express();
const port = 6000;
app.get("/api", (req, res) => {
    res.send("Hellos  World!" + "Host" + os.hostname() + "CPU" + cpus);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
