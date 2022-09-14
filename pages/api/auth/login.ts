import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import { validate } from "middleware/validation";

const loginSchema = Joi.object({
  username: Joi.string().required().min(6).messages({
    "string.base": `"username" should be a type of 'text'`,
    "string.empty": `"username" cannot be an empty field`,
    "string.min": `"username" should have a minimum length of {#limit}`,
    "any.required": `"username" is a required field`,
  }),
  password: Joi.string().required().min(6).messages({
    "string.base": `"password" should be a type of 'text'`,
    "string.empty": `"password" cannot be an empty field`,
    "string.min": `"password" should have a minimum length of {#limit}`,
    "any.required": `"password" is a required field`,
  }),
});

export default connect().post(
  validate({ body: loginSchema }),
  (req: NextApiRequest, res: NextApiResponse) => {
    return res
      .status(200)
      .json({ token: process.env.BARBER_TOKEN + `__${Date.now()}` });
  }
);
