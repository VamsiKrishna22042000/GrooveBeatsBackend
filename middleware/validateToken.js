//

import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const validateToken = asyncHandler(async (req, res, next) => {
  const headerToken = req.headers.authorization || req.headers.Authorization;

  if (!headerToken) {
    res.status(400);
    throw new Error("Token required");
  }

  if (headerToken && headerToken.startsWith("Bearer")) {
    const obtainedToken = headerToken.split(" ")[1];

    try {
      const decode = jwt.verify(obtainedToken, process.env.SEC_TOKEN);
      const user = {
        id: decode.id,
        username: decode.username,
        email: decode.email,
      };
      req.user = user;
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Token is invalid or expired");
    }
  }
});

export default validateToken;
