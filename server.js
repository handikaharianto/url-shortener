const express = require("express");
require("express-async-errors");
require("dotenv").config();

const connectDB = require("./db/connect");
const urlRouter = require("./routes/url");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/url", urlRouter);

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
