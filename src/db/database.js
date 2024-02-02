const dbDriver = require("mysql2");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const pool = dbDriver.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// const helperExecuteSQL = (sql) => {
//   pool.execute(sql, (err, result) => {
//     if (err) throw err;

//     if (result) return console.warn("Comando executado");
//   });
// };

if (pool) console.log("Database initialized");
module.exports = pool.promise();
