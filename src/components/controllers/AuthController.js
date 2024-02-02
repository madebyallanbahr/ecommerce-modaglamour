const Auth = require("../models/Auth");

exports.loginUser = async (req, res, next) => {
  let actualUser = new Auth(req.body.inpmail, req.body.inppass);

  actualUser = await actualUser.checkCredentialsUser();

  console.log(actualUser);

  if (!actualUser) return res.sendStatus(404);

  return res.sendStatus(302);
};

exports.registerUser = async (req, res, next) => {
  let user = new Auth(req.body.inpmail, req.body.inppass);

  user = await user.createNewAuthenticatedUser();

  // added a hash type in creation of password.
  // Try to use bcrypto

  console.log(user);
  if (!user) return res.sendStatus(302);

  return res.sendStatus(201);
};
