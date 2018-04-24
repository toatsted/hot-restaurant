const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let tables = [];
let waitlist = [];

require("./app/routing/apiRoutes.js")(app, tables, waitlist);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => console.log(`localhost is listening on port ${PORT}`))