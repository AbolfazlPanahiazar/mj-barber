import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const { JWT_SERCERT_KEY } = process.env;

export const authMiddleWare = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Invalid access token.",
    });
  }
  try {
    const data = jwt.verify(
      req.headers.authorization,
      JWT_SERCERT_KEY as string
    );
    console.log(data);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid access token.",
    });
  }
};
