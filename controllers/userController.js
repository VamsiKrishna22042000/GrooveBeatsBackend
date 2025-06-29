import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields are required");
  }

  const getUser = await Users.findOne({ email });

  if (!getUser) {
    res.status(404);
    throw new Error("User not registred, please enter correct email");
  }

  const checkPassword = await bcrypt.compare(password, getUser.password);

  if (!checkPassword) {
    res.status(401);
    throw new Error("Please enter correct password");
  }

  if (checkPassword) {
    const token = jwt.sign(
      {
        username: getUser.username,
        email: getUser.email,
        id: getUser.id,
      },
      process.env.SEC_TOKEN,
      {
        expiresIn: "60m",
      }
    );

    if (token) {
      res.status(200).json({ message: "Login Successful", token: token });
    } else {
      res.status(401);
      throw new Error("Un authorized user");
    }
  }
});

export const userRegistration = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (hashedPassword) {
    const registerUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    if (registerUser) {
      res.status(201).json({
        status: 200,
        message: "User Registration Successful",
        account: {
          id: registerUser.id,
          username: registerUser.username,
          email: registerUser.email,
        },
      });
    } else {
      res.status(500);
      throw new Error("Internal server error");
    }
  }
});

export const changePassword = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Changed Password" });
});
