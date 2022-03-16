const express = require("express");
const path = require("path");
require("express-async-errors");
require("dotenv").config();

const connectDB = require("./db/connect");
const urlRouter = require("./routes/url");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for production
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Routes
app.use("/url", urlRouter);

// for production
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);

    // Start server
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
