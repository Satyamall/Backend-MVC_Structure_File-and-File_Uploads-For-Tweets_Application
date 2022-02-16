
const express = require("express");
const { getTweets, getTotalTweets, getTweetByUserid, getTweetByTitle, createTweet, deleteTweet, patchTweet, getTweetsByIndex } = require("../controllers/tweets.controller");
const router = express.Router();

const validateTweets = require("../validators/validateTweets")


router.get("/", getTweets);

router.get("/index", getTweetsByIndex);

router.get("/total", getTotalTweets);

router.get("/:user_id", getTweetByUserid);

router.get("/:title", getTweetByTitle);

router.post("/", ...validateTweets(),createTweet);

router.delete("/:user_id", deleteTweet);

router.patch("/:user_id",patchTweet);

module.exports = router;