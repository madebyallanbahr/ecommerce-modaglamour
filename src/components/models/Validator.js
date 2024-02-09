class Validator {
  _patternEmail;
  _patternPassword;
  _fields;
  constructor(fieldEmail, fieldPassword) {
    this._patternPassword = new RegExp(
      "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
    );
    this._patternEmail = "";
    this._fields = { email: fieldEmail, password: fieldPassword };
  }
  validateFields = async () => {
    if (this._patternPassword.test(this._fields.password)) return true;
  };
}

module.exports = Validator;
