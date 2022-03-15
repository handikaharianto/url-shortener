const { customAlphabet } = require("nanoid");

const Url = require("../models/Url");

const postOriginalUrl = async (req, res) => {
  let { url } = req.body;

  if (!url) throw new Error("URL field cannot be empty!");

  // Generate slug using alphanumeric characters
  const alphanumericChars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nanoid = customAlphabet(alphanumericChars, 10);

  const urlAndSlug = await Url.create({
    url,
    slug: nanoid(),
  });

  const { slug } = urlAndSlug;

  res.status(201).json({ shortUrl: `${req.headers.host}/url/${slug}` });
};

const getShortenedUrl = async (req, res) => {
  const { slug } = req.params;

  // Find data based on slug
  const urlAndSlug = await Url.findOne({ slug });

  if (!urlAndSlug) {
    return res.redirect("/404");
  }

  const { url } = urlAndSlug;

  res.status(200).redirect(url);
};

module.exports = { postOriginalUrl, getShortenedUrl };
