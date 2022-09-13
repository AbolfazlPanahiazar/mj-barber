import type { NextApiRequest, NextApiResponse } from "next";

import { IPackage } from "types";

type ResponseData = {
  packages: IPackage[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body;
  const query = req.query;
  const coockies = req.cookies;
  res.status(200).json({ packages: [] });
}
