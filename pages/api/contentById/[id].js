import dbConnect from "../../../utils/dbConnect";
import Content from "../../../models/Content";

dbConnect();

const contentFindById = async (req, res) => {
  const { id } = req.query;
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Content.findById(id);
        res.status(200).json({ sucess: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default contentFindById;
