const db = require("../../db/database");
const crypto = require("crypto");

class AuthModel {
  _credentials;
  constructor(email, pass) {
    this._credentials = { email: email, password: pass };
  }
  generateToken = async () => {
    return crypto.randomBytes(64).toString("hex");
  };
  async createNewAuthenticatedUser() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let createdAt = `${year}-${month}-${day}`;

    let sql = `INSERT INTO users (email, pass, created_at)
    SELECT '${this._credentials.email}', '${this._credentials.password}', '${createdAt}'
    WHERE NOT EXISTS (
        SELECT * FROM users 
        WHERE email = '${this._credentials.email}'
    );`;
    if (this._credentials.email == "" && this._credentials.password == "")
      return false;

    const [user, _] = await db.execute(sql);
    if (user.affectedRows == 0) {
      return false;
    }

    return user;
  }
  async checkCredentialsUser() {
    let sql = `SELECT * FROM users WHERE EXISTS (SELECT 1 FROM users WHERE email = '${this._credentials.email}' AND pass = '${this._credentials.password}')`;
    const [user, _] = await db.execute(sql);
    if (user == "") {
      return false;
    }
    return user;
  }
}

module.exports = AuthModel;
