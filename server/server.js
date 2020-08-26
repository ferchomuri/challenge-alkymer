
require("dotenv").config();
const express = require("express");

const app = express();

//Get all APPS
app.get("/api/getApps", (req, res) => {
    res.status(200).json({
        status: "success",
        data:{
            restaurant: ["mcdonalds", "wendys"]
        }             
    });
});

//Get a App
app.get("/api/App/:idApp", (req, res) => {
    console.log(req.params);
});

//Creat App
app.post("/api/App", (req, res) => {

});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`Server is ip on port ${port}`);
});

