import dbConnect from "../../../utils/dbConnect";
import Content from "../../../models/Content";
import { getToken } from "next-auth/jwt";

dbConnect();

export const contentFind = async (req, res) => {
  const { method } = req;

  const secret = "test";
  const token = await getToken({ req, secret });

  if (token || method === "GET") {
    switch (method) {
      case "GET":
        try {
          const data = await Content.find({});
          res.status(200).json({ sucess: true, data });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      case "POST":
        try {
          const data = await Content.create(req.body);
          res.status(201).json({ success: true, data });
        } catch (error) {
          console.log("DB POST ERROR: ", error.message);
          res.status(400).json({ success: false, error });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    res.status(403).json({ success: false });
  }
};

export default contentFind;
