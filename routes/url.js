const express = require("express");
const router = express.Router();

const { postOriginalUrl, getShortenedUrl } = require("../controllers/url");

router.post("/", postOriginalUrl);
router.get("/:slug", getShortenedUrl);

module.exports = router;
