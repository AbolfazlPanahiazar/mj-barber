import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  if (
    req.method === "POST" &&
    body?.username &&
    body?.password &&
    body.username === process.env.BARBER_NAME &&
    body.password === process.env.BARBER_PASS
  ) {
    return res
      .status(200)
      .json({ token: process.env.BARBER_TOKEN + `__${Date.now()}`});
  } else {
    res.status(401).json({ message: "Your username or password is incorrect" });
  }
}
