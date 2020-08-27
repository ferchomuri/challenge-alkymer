require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

//Get all APPS
app.get("/api/getApps", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      apps: ["mcdonalds", "wendys"],
    },
  });
});

//Get a App
app.get("/api/App/:idApp", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      app: ["mcdonalds"],
    },
  });
});

//Create App
app.post("/api/App", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      app: ["mcdonalds"],
    },
  });
});

//Update App
app.put("/api/App/:idApp", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      app: ["mcdonalds"],
    },
  });
});

//Delete App
app.delete("/api/App/:idApp", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is ip on port ${port}`);
});
