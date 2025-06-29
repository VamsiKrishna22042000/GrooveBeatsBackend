import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);

    if (connect) {
      console.log(
        "DB Connected Successfully",
        connect.connection.host,
        connect.connection.name
      );
    } else {
      console.log("DB Connection Failed1");
    }
  } catch (err) {
    console.log("DB Connection Failed2");
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
