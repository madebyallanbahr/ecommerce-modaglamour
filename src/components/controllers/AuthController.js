const Auth = require("../models/Auth");
const jwt = require("jsonwebtoken");
exports.loginUser = async (req, res, next) => {
  let actualUser = new Auth(req.body.inpmail, req.body.inppass);
  actualUser = await actualUser.checkCredentialsUser();

  if (!actualUser) return res.redirect("/error");
  const acessToken = jwt.sign(
    {
      email: req.body.inpmail,
      password: req.body.inppass,
    },
    process.env.ACCESS_TOKEN_JWT
  );

  return res.redirect(`/shop?auth=true&token=${acessToken}`);
};

exports.registerUser = async (req, res, next) => {
  let newUser = new Auth(req.body.inpmail, req.body.inppass);

  newUser = await newUser.createNewAuthenticatedUser();

  if (!newUser) return res.redirect("/error");
  return res.redirect("/");
};
