const db = require("../../db/database");

class AuthModel {
  _credentials;

  constructor(email, pass) {
    this._credentials = { email: email, password: pass };
  }

  async createNewAuthenticatedUser() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let createdAt = `${year}-${month}-${day}`;

    let sql = `INSERT INTO users(email,pass, created_at)
    VALUES('${this._credentials.email}', '${this._credentials.password}', '${createdAt}')`;

    const [newUser, _] = await db.execute(sql);

    return newUser;
  }
  async checkCredentialsUser() {}
}

module.exports = AuthModel;
