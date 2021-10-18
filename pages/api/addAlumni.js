// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "utils/dbConnect";
import Alumni from "model/alumniModel";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  const { full_name, phone_number, email, gender, pass_out_year } = req.body;
  const parsing_data = {
    name: full_name.join(" "),
    phoneNo: phone_number,
    passoutYear: pass_out_year,
    email,
    gender,
  };

  switch (method) {
    case "POST":
      try {
        const find_data = await Alumni.find({
          name: parsing_data.name,
          phoneNo: parsing_data.phoneNo,
          email: parsing_data.email,
        });

        if (find_data.length == 0) {
          const newAlumni = new Alumni(parsing_data);
          const doc = await newAlumni.save();
          res.status(201).json({ success: true, data: doc });
        } else {
          res
            .status(400)
            .json({ success: false, msg: "Data already uploaded", data: null });
        }
      } catch (e) {
        res.status(400).json({ success: false, msg: e, data: null });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, msg: "Invalid method", data: null });
      break;
  }
}
