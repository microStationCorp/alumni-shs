import alumniModel from "model/alumniModel";
import dbConnect from "utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const count = await alumniModel.find({}).count();
  res.status(200).json({ count, success: true });
}
