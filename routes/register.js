const { Router } = require("express");
const register = Router();

register.get("/", (req, res) => {
  const user = req.session.user;
  req.session.destroy((err) => {
    if (!err) res.render('pages/register', { user });
    else res.send("Error");
  });
});

module.exports = register;