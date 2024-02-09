const Auth = require("../models/Auth");

exports.loginUser = async (req, res, next) => {
  let actualUser = new Auth(req.body.inpmail, req.body.inppass);

  actualUser = await actualUser.checkCredentialsUser();

  if (!actualUser) return res.redirect("/error");
  return res.redirect("/shop?auth=true&token=123");
};

exports.registerUser = async (req, res, next) => {
  let newUser = new Auth(req.body.inpmail, req.body.inppass);

  newUser = await newUser.createNewAuthenticatedUser();

  if (!newUser) return res.redirect("/error");
  return res.redirect("/");
};
