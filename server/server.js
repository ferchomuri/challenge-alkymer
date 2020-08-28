require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(express.json());

//Get all APPS
app.get("/api/getApps", async (req, res) => {
  try {
    const results = await db.query("select * from app");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        apps: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Get a App
app.get("/api/App/:id", async (req, res) => {
  try {
    const results = await db.query("select * from app where id_app = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        app: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Create App
app.post("/api/App", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO app (id_app, name_app, img, price, id_category) values ($1, $2, $3, $4, $5)",
      [
        req.body.id,
        req.body.name,
        req.body.img,
        req.body.price,
        req.body.category,
      ]
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }

  res.status(201).json({
    status: "success",
    data: {
      app: ["mcdonalds"],
    },
  });
});

//Update App
app.put("/api/App/:id", (req, res) => {
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
app.delete("/api/App/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is ip on port ${port}`);
});
