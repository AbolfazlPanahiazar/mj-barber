import withJoi from "next-joi";

export const validate = withJoi({
  onValidationError: (_, res, validationError) => {
    return res
      .status(400)
      .json({ message: validationError.details[0].message });
  },
});
