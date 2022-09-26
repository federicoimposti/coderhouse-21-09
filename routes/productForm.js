const express = require('express');
const productFormRouter = express.Router();

productFormRouter.get("/", (req, res) => {
    if (req.session?.user) {
        res.render('pages/productForm', { user: req.session.user });
      }
      else {
        res.render('pages/login');
      }  
});

module.exports = productFormRouter;