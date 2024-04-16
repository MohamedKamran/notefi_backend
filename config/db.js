const mongoose = require("mongoose");
// mongoose.set('debug', true);

const connection = mongoose
  .createConnection(process.env.MONGODB_URI || "mongodb://localhost:5000")
  .on("open", () => {
    console.log("MongoDB Connected");
  })
  .on("error", () => {
    console.log("MongoDB Connection error");
  });

module.exports = connection;
