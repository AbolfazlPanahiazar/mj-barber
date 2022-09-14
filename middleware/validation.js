import withJoi from "next-joi";

export const validate = withJoi({
  /**
   * By default, `next-joi` will return a 400 HTTP error code but
   * we can customize the error response.
   */
  onValidationError: (req, res, ve) => {
    return res.status(400).json({ message: ve.details[0].message });
  },
});
