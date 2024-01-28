const express = require("express");
const router = require("./src/components/router/router");
const app = express();
const port = 3000;

app.use("/", router);
app.listen(port, () => console.warn(`Server app listening on port ${port}!`));
