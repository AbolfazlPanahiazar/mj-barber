import nextConnect from "next-connect";
import multer from "multer";

import { authMiddleWare } from "middleware/auth";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      req.filePath = `/uploads/${file.originalname}`;
      return cb(null, file.originalname);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
}).use(authMiddleWare);

apiRoute.use(upload.array("image"));

apiRoute.post((req, res) => {
  res.status(200).json({ path: req.filePath });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
