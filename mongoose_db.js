const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const url =
  "mongodb+srv://nilu:nilu@cluster0.h8s11mu.mongodb.net/Human_Resource?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const client = await mongoose.connect(url);
    console.log("Connection set with mongoose");
  } catch (err) {
    console.log({ msg: "Error while connecting to Mongoose", Error: err });
  }
};

module.exports = connection;
