require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const reviewRoutes = require("./routes/reviews");
const searchRoutes = require("./routes/search");
const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", bookRoutes);
app.use("/api", reviewRoutes);
app.use("/api", searchRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("MongoDB connection error:",err));
