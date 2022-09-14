import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import { validate } from "middleware/validation";
import bcrypt from "bcrypt";

import { connect as mongoConnnect } from "utils/connection";
import { authMiddleWare } from "middleware/auth";

const registerAdminSchema = Joi.object({
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

export default connect()
  // .use(authMiddleWare)
  .post(
    validate({ body: registerAdminSchema }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const { Admin } = await mongoConnnect();
      const newAdmin = new Admin({
        username: req.body.username,
        password: hashedPassword,
      });
      await newAdmin.save();
      return res
        .status(200)
        .json({ message: "New admin registered successfully." });
    }
  );
