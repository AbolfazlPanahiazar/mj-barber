import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validate } from "middleware/validation";
import { connect as mongoConnnect } from "utils/connection";

const { JWT_SERCERT_KEY } = process.env;

const loginSchema = Joi.object({
  username: Joi.string().required().min(10).messages({
    "string.base": `"username" should be a type of 'text'`,
    "string.empty": `"username" cannot be an empty field`,
    "string.min": `"username" should have a minimum length of {#limit}`,
    "any.required": `"username" is a required field`,
  }),
  password: Joi.string().required().min(10).messages({
    "string.base": `"password" should be a type of 'text'`,
    "string.empty": `"password" cannot be an empty field`,
    "string.min": `"password" should have a minimum length of {#limit}`,
    "any.required": `"password" is a required field`,
  }),
});

export default connect().post(
  validate({ body: loginSchema }),
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { Admin } = await mongoConnnect();
    const admin = await Admin.findOne({
      username: req.body.username,
    });
    if (!admin || !bcrypt.compareSync(req.body.password, admin.password)) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    return res.status(200).json({
      token: jwt.sign({ username: admin.username }, JWT_SERCERT_KEY as string, {
        expiresIn: "10h",
      }),
    });
  }
);
