import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import { validate } from "middleware/validation";

import { connect as mongoConnnect } from "utils/connection";
import { authMiddleWare } from "middleware/auth";

const orderSchema = Joi.object({
  fullname: Joi.string().required().min(3).messages({
    "string.base": `"fullname" should be a type of 'text'`,
    "string.empty": `"fullname" cannot be an empty field`,
    "string.min": `"fullname" should have a minimum length of {#limit}`,
    "any.required": `"fullname" is a required field`,
  }),
  phoneNumber: Joi.string().required().min(8).max(14).messages({
    "string.base": `"phone number" should be a type of 'text'`,
    "string.empty": `"phone number" cannot be an empty field`,
    "string.min": `"phone number" should have a minimum length of {#limit}`,
    "string.max": `"phone number" should have a maximum length of {#limit}`,
    "any.required": `"phone number" is a required field`,
  }),
  barberId: Joi.string().required().min(3).messages({
    "string.base": `"packageId" should be a type of 'text'`,
    "string.empty": `"packageId" cannot be an empty field`,
    "string.min": `"packageId" should have a minimum length of {#limit}`,
    "any.required": `"packageId" is a required field`,
  }),
  datetime: Joi.date().required().messages({
    "string.base": `"date time" should be a type of 'date'`,
    "string.empty": `"date time" cannot be an empty field`,
    "any.required": `"date time" is a required field`,
  }),
  address: Joi.string().required().min(10).messages({
    "string.base": `"address" should be a type of 'text'`,
    "string.empty": `"address" cannot be an empty field`,
    "string.min": `"address" should have a minimum length of {#limit}`,
    "any.required": `"address" is a required field`,
  }),
  packageIds: Joi.array().items(Joi.string()).required().min(1).messages({
    "string.base": `"packageIds" should be a type of 'texts'`,
    "string.empty": `"packageIds" cannot be an empty field`,
    "string.min": `"packageIds" should have a minimum length of {#limit}`,
    "any.required": `"packageIds" is a required field`,
  }),
});

export default connect()
  .post(
    validate({ body: orderSchema }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      const { Order } = await mongoConnnect();
      const newOrder = new Order({
        fullname: req.body.fullname,
        phoneNumber: req.body.phoneNumber,
        barberId: req.body.barberId,
        datetime: req.body.datetime,
        address: req.body.address,
        packageIds: req.body.packageIds,
      });
      await newOrder.save();
      return res
        .status(200)
        .json({ message: "New Order created successfully." });
    }
  )
  .use(authMiddleWare)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { Order, Barber, Package } = await mongoConnnect();
    const allOrders = await Order.find();
    await Promise.all(
      allOrders.map(async (item) => {
        const theBarber = await Barber.findById(item.barberId);
        const barberName = theBarber?.fullname;
        const packagesTitles = await Promise.all(
          item.packageIds.map(async (item: string) => {
            const thePackage = await Package.findById(item);
            return thePackage?.title;
          })
        );
        return { ...item._doc, barberName, packagesTitles };
      })
    )
      .then((result) => {
        return res.status(200).json({ orders: result });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ message: "There is sth wrong with orders." });
      });
  });
