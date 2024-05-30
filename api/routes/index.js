const { Router } = require("express");
const chat = require("./chat.js");

const router = Router();
router.use("/", chat);
module.exports = router;
