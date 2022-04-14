import dbConnect from "../../../utils/dbConnect";
import Template from "../../../models/Template";

dbConnect();

const templateFindById = async (req, res) => {
  const { id } = req.query;
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await Template.findById(id);
        res.status(200).json({ sucess: true, data });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const data = await Template.findOneAndUpdate(
          { _id: id },
          JSON.parse(req.body),
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

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default templateFindById;
