import type { NextApiRequest, NextApiResponse } from "next";
import connect from "next-connect";
import Joi from "joi";
import { validate } from "middleware/validation";

import { connect as mongoConnnect } from "utils/connection";
import { authMiddleWare } from "middleware/auth";

const packageSchema = Joi.object({
  title: Joi.string().required().min(3).messages({
    "string.base": `"title" should be a type of 'text'`,
    "string.empty": `"title" cannot be an empty field`,
    "string.min": `"title" should have a minimum length of {#limit}`,
    "any.required": `"title" is a required field`,
  }),
  priceTRY: Joi.number().required().min(1).messages({
    "string.base": `"priceTRY" should be a type of 'text'`,
    "string.empty": `"priceTRY" cannot be an empty field`,
    "string.min": `"priceTRY" should have a minimum length of {#limit}`,
    "any.required": `"priceTRY" is a required field`,
  }),
  priceUSD: Joi.number().required().min(1).messages({
    "string.base": `"priceUSD" should be a type of 'text'`,
    "string.empty": `"priceUSD" cannot be an empty field`,
    "string.min": `"priceUSD" should have a minimum length of {#limit}`,
    "any.required": `"priceUSD" is a required field`,
  }),
  priceEUR: Joi.number().required().min(1).messages({
    "string.base": `"priceEUR" should be a type of 'text'`,
    "string.empty": `"priceEUR" cannot be an empty field`,
    "string.min": `"priceEUR" should have a minimum length of {#limit}`,
    "any.required": `"priceEUR" is a required field`,
  }),
  description: Joi.string().required().min(10).messages({
    "string.base": `"description" should be a type of 'text'`,
    "string.empty": `"description" cannot be an empty field`,
    "string.min": `"description" should have a minimum length of {#limit}`,
    "any.required": `"description" is a required field`,
  }),
  image: Joi.string().required().min(3).messages({
    "string.base": `"image" should be a type of 'text'`,
    "string.empty": `"image" cannot be an empty field`,
    "string.min": `"image" should have a minimum length of {#limit}`,
    "any.required": `"image" is a required field`,
  }),
});

export default connect()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { Package } = await mongoConnnect();
    const allPackage = await Package.find();
    return res.status(200).json({ packages: allPackage });
  })
  .use(authMiddleWare)
  .post(
    validate({ body: packageSchema }),
    async (req: NextApiRequest, res: NextApiResponse) => {
      const { Package } = await mongoConnnect();
      const newPackage = new Package({
        title: req.body.title,
        priceTRY: req.body.priceTRY,
        priceUSD: req.body.priceUSD,
        priceEUR: req.body.priceEUR,
        description: req.body.description,
        image: req.body.image,
      });
      await newPackage.save();
      return res
        .status(200)
        .json({ message: "New package created successfully." });
    }
  );
