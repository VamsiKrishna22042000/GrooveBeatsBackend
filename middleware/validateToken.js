import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const validateToken = asyncHandler(async (req, res, next) => {
  const headerToken = req.headers.authorization || req.headers.Authorization;

  if (!headerToken) {
    res.status(400);
    throw Error("token required");
  }

  if (headerToken && headerToken.startsWith("Bearer")) {
    const obtainedToken = headerToken.split(" ")[1];

    jwt.verify(obtainedToken, process.env.SEC_TOKEN, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("Token is invalid or expired");
      } else {
        const user = {
          id: decode.id,
          username: decode.username,
          email: decode.email,
        };

        req.user = user;
        next();
      }
    });
  }
});

export default validateToken;
