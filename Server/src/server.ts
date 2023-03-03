import express from "express";

const app = express();
const port = 3000;

app.get("/ads", (req, res) => {
 return res.send("Hello World!");
});

app.listen(port);
