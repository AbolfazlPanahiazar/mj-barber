import mongoose, { Model, Schema } from "mongoose";

import { IPackage } from "types";

const { MONGODB_URI } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // OUR PACKAGE SCHEMA
  const packageSchema = new Schema<IPackage>({
    title: { type: String, required: true },
    priceTRY: { type: Number, required: true },
    priceUSD: { type: Number, required: true },
    priceEUR: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });

  // OUR PACKAGE MODEL
  const Package =
    mongoose.models.Package || mongoose.model("Package", packageSchema);

  return { conn, Package };
};
