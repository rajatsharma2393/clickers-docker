const express = require("express");
const router = express.Router();
const clickService = require("./clickService");

router.post("/", recordClicks);
router.get("/", getClicks);

function recordClicks(req, res) {
  clickService.recordClicks().then(data => {
    res.status(200).json(data);
  });
}

function getClicks(req, res) {
  clickService.getClicks().then(data => {
    res.status(200).json(data);
  });
}

module.exports = router;
