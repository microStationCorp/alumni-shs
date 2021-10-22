import alumniModel from "model/alumniModel";
import dbConnect from "utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { skipNumber } = req.body;
        const results = await alumniModel.find({}).skip(skipNumber).limit(8);
        res.status(200).json({
          success: true,
          data: results.map((doc) => {
            return {
              admin: doc.admin,
              name: doc.name,
              id: doc._id.toString(),
              passoutYear: doc.passoutYear,
              dateOfRegister: doc.dateOfRegister.toDateString(),
            };
          }),
          end: skipNumber > results.length ? true : false,
        });
      } catch (error) {
        res.status(400).json({ success: false, msg: error });
      }
  }
}
