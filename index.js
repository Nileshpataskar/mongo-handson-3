const express = require("express");
const { route } = require("./route/navroute");
const connection = require("./mongoose_db");
const navroute = require("./route/navroute");
const product_route = require("./route/product_route");
const app = express();

app.use(express.json())


app.use("/add",product_route)
app.use("/api",navroute)


app.listen(2000, async() => {
  try {
    await connection()
    console.log("Server started successfully");
  } catch (err) {
    console.log("Error in start", err);
  }
});
