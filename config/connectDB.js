import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (mongoose.connection.readyState === 1) {
      console.log(
        "DB Connected Successfully",
        connect.connection.host,
        connect.connection.name
      );
    } else {
      console.log("DB Connection Failed1 - Invalid state");
    }
  } catch (err) {
    console.log("DB Connection Failed2", err.message);
    console.log(err.stack);
    process.exit(1);
  }
};

export default connectDB;
