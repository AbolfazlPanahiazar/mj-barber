import mongoose, { Schema } from "mongoose";

import { IPackage, IAdmin } from "types";

const { MONGODB_URI } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const packageSchema = new Schema<IPackage>({
    title: { type: String, required: true },
    priceTRY: { type: Number, required: true },
    priceUSD: { type: Number, required: true },
    priceEUR: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  });
  const Package =
    mongoose.models.Package || mongoose.model("Package", packageSchema);

  const adminSchema = new Schema<IAdmin>({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });
  const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

  return { conn, Package, Admin };
};
