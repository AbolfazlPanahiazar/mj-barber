import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import { validate } from "middleware/validation";

import { connect as mongoConnnect } from "utils/connection";
import { authMiddleWare } from "middleware/auth";

const barberSchema = Joi.object({
  fullname: Joi.string().required().min(3).messages({
    "string.base": `"fullname" should be a type of 'text'`,
    "string.empty": `"fullname" cannot be an empty field`,
    "string.min": `"fullname" should have a minimum length of {#limit}`,
    "any.required": `"fullname" is a required field`,
  }),
});

export default connect()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { Barber } = await mongoConnnect();
    const allbarbers = await Barber.find();
    return res.status(200).json({ barbers: allbarbers });
  })
  .use(authMiddleWare)
  .post(
    validate({ body: barberSchema }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      const { Barber } = await mongoConnnect();
      const newBarber = new Barber({
        fullname: req.body.fullname,
      });
      await newBarber.save();
      return res
        .status(200)
        .json({ message: "New barber created successfully." });
    }
  );
