const { Router } = require("express");
const login = Router();

function auth(req, res, next) {
  if (req.session.user == "fede") return next();
  return res.status(401).send("Error de autenticación.");
}

login.get("/", (req, res) => {  
  res.render('pages/login'); 
});

login.post("/", (req, res) => {
    if (req.body.username) {
        req.session.user = req.body.username;      
        res.redirect('/');
    } else {
        res.send('Usuario incorrecto');
    }      
});

login.get("/privada", auth, (req, res) => {
  res.send("La ruta es privada.");
});

module.exports = login;