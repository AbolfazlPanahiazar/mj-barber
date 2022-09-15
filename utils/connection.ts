import mongoose, { Schema } from "mongoose";

import { IPackage, IAdmin, IBarber, IOrder } from "types";

const { MONGODB_URI } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log("mongodb error:", err));

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

  const barberSchema = new Schema<IBarber>({
    fullname: { type: String, required: true },
  });
  const Barber =
    mongoose.models.Barber || mongoose.model("Barber", barberSchema);

  const orderSchema = new Schema<IOrder>({
    fullname: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    barberId: { type: String, required: true },
    datetime: { type: String, required: true },
    address: { type: String, required: true },
    packageIds: { type: [String], required: true },
  });
  const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

  return { conn, Package, Admin, Barber, Order };
};
