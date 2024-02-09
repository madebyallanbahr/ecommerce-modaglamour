const express = require("express");
const router = require("./src/components/routes/router");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use("/", router);
app.listen(port, () => console.warn(`Server app listening on port ${port}!`));
