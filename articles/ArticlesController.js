const express = require('express');
const router = express.Router();


router.get('/articles', function(req, res){
    res.send("ROUTER ARTICLES");
});

router.get("/admin/articles/new", function(req, res){
    res.send("CREATE ARTICLES ");
});

module.exports = router;
