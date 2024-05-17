const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URI);

    console.log(
      `SUCCESS: Connection to MongoDB is successful. ${connection.connection.host}`
    );
  } catch (err) {
    console.error(`Database connection error: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
