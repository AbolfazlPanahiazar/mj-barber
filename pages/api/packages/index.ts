import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  if (!token || token.split("__").length !== 2) {
    return res
      .status(401)
      .json({ message: "you don't have access to this section" });
  }
  const accessToken = token?.split("__")[0];
  const timeStamp = token?.split("__")[1];
  if (
    accessToken !== process.env.BARBER_TOKEN ||
    Date.now() - +timeStamp > 86400000
  ) {
    return res
      .status(401)
      .json({ message: "you don't have access to this section" });
  }

  // return packages from db
  res.status(200).json({ packages: [] });
}
