var express = require('express');
var router = express.Router();
var { create, getAll, get, update, remove } = require("./controller");

router.get("/", getAll);
router.get("/:id", get);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
