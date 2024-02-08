const Auth = require("../models/Auth");

exports.loginUser = async (req, res, next) => {
  let actualUser = new Auth(req.body.inpmail, req.body.inppass);

  actualUser = await actualUser.checkCredentialsUser();

  req.headers.authorization = "123";

  if (!actualUser) return res.redirect("/error");
  return res.redirect("/shop?auth=true");
};

exports.registerUser = async (req, res, next) => {
  let user = new Auth(req.body.inpmail, req.body.inppass);

  user = await user.createNewAuthenticatedUser();

  if (!user) return res.redirect("/error");
  return res.redirect("/");
};
