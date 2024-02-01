const Auth = require("../models/Auth");

exports.loginUser = async (req, res, next) => {
  res.send("Login with user.");
};

exports.registerUser = async (req, res, next) => {
  let user = new Auth(req.body.inpmail, req.body.inppass);

  user = await user.createNewAuthenticatedUser();

  console.log(user);

  res.send("Created a new user in database");
};
