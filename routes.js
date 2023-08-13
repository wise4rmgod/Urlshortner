const express = require("express");
const shortid = require("shortid");
const Url = require("./models/url");

const router = express.Router();

router.post("/shorten", async (req, res) => {
  const originalUrl = req.body.url;
  const shortUrl = shortid.generate();

  const newUrl = new Url({
    originalUrl,
    shortUrl,
  });

  await newUrl.save();

  res.json(newUrl);
});

router.get("/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;

  const url = await Url.findOne({ shortUrl });

  if (!url) {
    return res.status(404).json({ error: "URL not found" });
  }

  res.redirect(url.originalUrl);
});

router.get("/all", async (req, res) => {
  try {
    const allUrls = await Url.find();
    res.json(allUrls);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching URLs" });
  }
});
module.exports = router;
