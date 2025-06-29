import mongoose from "mongoose";

const usersModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email should be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", usersModel);
