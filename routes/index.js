var express = require('express');
var router = express.Router();

router.get('/v1', require("./v1"));

module.exports = router;
