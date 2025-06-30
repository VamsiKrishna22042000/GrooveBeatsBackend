import asyncHandler from "express-async-handler";
import Favourites from "../models/favModel.js";

export const favSave = asyncHandler(async (req, res) => {
  const { uId } = req.params;
  const { sId, sO } = req.body;

  if (uId === (undefined || null)) {
    res.status(400);
    throw new Error("Bad Request!");
  }

  //sId songId, sO song Object uId
  if (sId === (undefined || null) || sO === (undefined || null)) {
    res.status(400);
    throw new Error("Bad Request!");
  }

  try {
    const createSong = await Favourites.create({
      id: sId,
      uId,
      sO,
    });

    if (createSong) {
      res.status(200).json({ message: "Song added to favourties" });
    }
  } catch (err) {
    res.status(500);
    throw new Error("Internal Server Error");
  }
});

export const favDelete = asyncHandler(async (req, res) => {
  const { uId } = req.params;
  const { sId } = req.body;

  if (uId === (undefined || null) || sId === (undefined || null)) {
    res.status(400);
    throw new Error("Bad Request!");
  }

  const deleteSong = await Favourites.deleteOne({ uId, id: sId });

  if (deleteSong.deletedCount === 0) {
    res.status(404);
    throw new Error("Song not found for this user");
  }

  res.status(200).json({ message: `Song deleted successfully` });
});
