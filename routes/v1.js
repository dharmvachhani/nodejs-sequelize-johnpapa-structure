var express = require('express');
var router = express.Router();

router.get('/user', require("../modules/user"));

module.exports = router;
