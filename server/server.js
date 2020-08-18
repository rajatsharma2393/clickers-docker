const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const clicksRoute = require("./click/clickRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/clicks", clicksRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
});
