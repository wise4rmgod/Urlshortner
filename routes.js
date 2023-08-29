const express = require("express");
const shortid = require("shortid");
const Url = require("./models/url");

const router = express.Router();

// Shorten a URL
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

// Set a custom short URL for a URL
router.post("/custom-shorten", async (req, res) => {
  const { url, customShortUrl } = req.body;

  const existingUrl = await Url.findOne({ shortUrl: customShortUrl });

  if (existingUrl) {
    return res.status(400).json({ error: "Custom short URL already in use" });
  }

  const newUrl = new Url({
    originalUrl: url,
    shortUrl: customShortUrl,
  });

  await newUrl.save();

  res.json(newUrl);
});

// Redirect to the original URL using the short URL
router.get("/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;

  const url = await Url.findOne({ shortUrl });

  if (!url) {
    return res.status(404).json({ error: "URL not found" });
  }

  res.redirect(url.originalUrl);
});

module.exports = router;
