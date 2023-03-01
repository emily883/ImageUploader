const express = require("express");
const multer = require("multer");
const upload = require("../upload");
const dotenv = require("dotenv").config();

const router = express.Router();

const Link = process.env.LINK;

router.post("/", upload.single("image"), async function (req, res) {
  const link = {
    link: Link  + res.req.file.filename,
  };
  return res.status(200).json(link);
});
module.exports = router;
