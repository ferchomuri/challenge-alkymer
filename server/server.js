require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

//Get all APPS
app.get("/api/App/getApps", async (req, res) => {
  try {
    const results = await db.query("select * from app");
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
      "INSERT INTO app (name_app, image, id_category,  price_app) values ($1, $2, $3, $4) returning *",
      [req.body.name, req.body.image, req.body.category, req.body.price]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        app: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Update App
app.put("/api/App/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE app SET name_app = $1, image = $2, id_category = $3, price_app = $4 where id_app = $5 returning *",
      [
        req.body.name,
        req.body.image,
        req.body.category,
        req.body.price,
        req.params.id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        app: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log(req.params.id);
  console.log(req.body);
});

//Delete App
app.delete("/api/App/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM app where id_app = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is ip on port ${port}`);
});
