import alumniModel from "model/alumniModel";
import dbConnect from "utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { skipNumber } = req.body;

  alumniModel
    .find({})
    .skip(skipNumber)
    .limit(8)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result.map((doc) => {
          return {
            admin: doc.admin,
            name: doc.name,
            id: doc._id.toString(),
            passoutYear: doc.passoutYear,
            dateOfRegister: doc.dateOfRegister.toDateString(),
          };
        }),
        end: skipNumber > result.length ? true : false,
      });
    });
}
