import dbConnect from "../../../utils/dbConnect";
import Content from "../../../models/Content";
import { getToken } from "next-auth/jwt";

dbConnect();

const contentFindById = async (req, res) => {
  const { id } = req.query;
  const { method } = req;

  const secret = "test";
  const token = await getToken({ req, secret });

  if (token || method === "GET") {
    switch (method) {
      case "GET":
        try {
          const data = await Content.findById(id);
          res.status(200).json({ sucess: true, data });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      case "PUT":
        try {
          const data = await Content.findOneAndUpdate(
            { _id: id },
            JSON.parse(req.body),
            // req.body,
            {
              upsert: true,
            }
          );
          res.status(200).json({ sucess: true, data });
        } catch (error) {
          console.error(error);
          res.status(400).json({ success: false });
        }
        break;

      case "DELETE":
        try {
          const data = await Content.findOneAndDelete({ _id: id });
          res.status(200).json({ sucess: true, data });
        } catch (error) {
          console.error(error);
          res.status(400).json({ success: false });
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

export default contentFindById;
