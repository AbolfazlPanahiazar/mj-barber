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
    const { barberId } = req.query;
    if (!barberId)
      return res.status(400).json({ message: "Barber not found." });
    const { Barber } = await mongoConnnect();
    try {
      const theBarber = await Barber.findById(barberId);
      return res.status(200).json({ barber: theBarber });
    } catch (err) {
      return res.status(400).json({ message: "Barber not found." });
    }
  })
  .use(authMiddleWare)
  .put(
    validate({ body: barberSchema }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      const { barberId } = req.query;
      if (!barberId)
        return res.status(400).json({ message: "Barber not found." });
      const { Barber } = await mongoConnnect();
      try {
        await Barber.findByIdAndUpdate(
          barberId,
          {
            fullname: req.body.fullname,
          },
          { new: true }
        );
        return res
          .status(200)
          .json({ message: "Barber updated successfully." });
      } catch (err) {
        return res.status(400).json({ message: "Barber not found." });
      }
    }
  )
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    const { barberId } = req.query;
    if (!barberId)
      return res.status(400).json({ message: "Barber not found." });
    const { Barber } = await mongoConnnect();
    try {
      await Barber.findByIdAndDelete(barberId);
      return res.status(200).json({ message: "Barber deleted successfully." });
    } catch (err) {
      return res.status(400).json({ message: "Barber not found." });
    }
  });
