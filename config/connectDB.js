import mongoose from "mongoose";

const connectDB = async () => {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        heartbeatFrequencyMS: 10000,
      });
      if (mongoose.connection.readyState === 1) {
        console.log(
          "DB Connected Successfully",
          connect.connection.host,
          connect.connection.name
        );
        break;
      } else {
        console.log("DB Connection Failed1 - Invalid state");
      }
    } catch (err) {
      attempt++;
      console.log(`DB Connection Failed2 (Attempt ${attempt}):`, err.message);
      console.log(err.stack);
      if (attempt === maxRetries) process.exit(1);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};

export default connectDB;
