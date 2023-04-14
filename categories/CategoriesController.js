const express = require('express');
const router = express.Router();

router.get('/categories', function(req, res){
    res.send("ROUTER CATEGORIES");
});

router.get("/admin/categories/new", function(req, res){
    res.send("ROUTER CATEGORIES");
});

module.exports = router;