import dbConnect from "../../../utils/dbConnect";
import Template from "../../../models/Template";

dbConnect();

export const templateFind = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Template.find({});
        res.status(200).json({ sucess: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await Template.create(req.body);
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
};

export default templateFind;
