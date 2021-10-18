import alumniModel from "model/alumniModel";
import dbConnect from "utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { page } = req.query;

  alumniModel
    .find({})
    .skip(parseInt(page) * 5)
    .limit(5)
    .then((result) => {
      console.log(result);
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
      });
    });
}
