const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log(process.env.CONNECTION_STRING, "connect");
    const connect = await mongoose.connect(
      process.env.CONNECTION_STRING
    );
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("Error connecting to database:", err);
    process.exit(1);
  }
};

module.exports = connectDb;
