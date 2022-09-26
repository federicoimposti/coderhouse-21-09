const { Router } = require("express");
const logout = Router();

logout.get("/", (req, res) => {
  const user = req.session.user;
  req.session.destroy((err) => {
    if (!err) res.render('pages/logout', { user });
    else res.send("Error");
  });
});

module.exports = logout;