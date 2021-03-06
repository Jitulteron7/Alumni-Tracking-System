const express = require("express");
const path = require("path");
require("dotenv").config();
require("./db/mongoose");

const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

// static file setup
app.set("view engine", "ejs");

//body parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
