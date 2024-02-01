const mySQL = require("mysql2");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const pool = mySQL.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

let sql = "SELECT * FROM users";

pool.execute(sql, (err, result) => {
  if (err) throw err;

  result.forEach((res) => {
    // console.log(res);
  });
});

module.exports = pool.promise();
