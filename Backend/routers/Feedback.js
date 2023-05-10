const { Router } = require("express");
const router = new Router();

const { AddFeedback } = require("../controllers/Feedbackcontroller");

router.post("/", AddFeedback);

module.exports = router;
