import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId, objectI } from "mongoose";

import { IPackage } from "types";
import { connect } from "utils/connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const token = req.headers.authorization;
  // if (!token || token.split("__").length !== 2) {
  //   return res
  //     .status(401)
  //     .json({ message: "you don't have access to this section" });
  // }
  // const accessToken = token?.split("__")[0];
  // const timeStamp = token?.split("__")[1];
  // if (
  //   accessToken !== process.env.BARBER_TOKEN ||
  //   Date.now() - +timeStamp > 86400000
  // ) {
  //   return res
  //     .status(401)
  //     .json({ message: "you don't have access to this section" });
  // }

  const { Package } = await connect();

  // create package
  // const newPackage = new Package({
  //   title: "test title 1",
  //   priceTRY: 12,
  //   priceUSD: 13,
  //   priceEUR: 14,
  //   description: "test description",
  //   image: "test image url",
  // });
  // await newPackage.save();

  // read all packages
  // const allPackage = await Package.find();

  // read one package
  // const thePackage = await Package.findById("632238e4477d8a24231ced53");

  // edit package
  // await Package.findByIdAndUpdate(
  //   "632238e4477d8a24231ced53",
  //   {
  //     title: "test title 5",
  //     priceTRY: 120,
  //     priceUSD: 1,
  //     priceEUR: 104,
  //     description: "test description",
  //     image: "test image url",
  //   },
  //   { new: true }
  // );

  // delete item
  await Package.findByIdAndDelete("632238e4477d8a24231ced53");

  // return packages from db
  res.status(200).json({ packages: [] });
}
