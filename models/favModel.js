import mongoose from "mongoose";

const favModel = mongoose.Schema(
  {
    uId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User Id required"],
      ref: "Users",
    },
    id: {
      type: String,
      required: [true, "Song Id required"],
    },
    sO: {
      type: Object,
      required: [true, "Song Object required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favourites", favModel);
