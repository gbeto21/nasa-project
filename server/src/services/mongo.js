require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@platzi-curso.xuzor.mongodb.net/nasa?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = { mongoConnect };
