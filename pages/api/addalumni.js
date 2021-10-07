// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "utils/dbConnect";
import Alumni from "model/alumniModel";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  console.log(req.body);
  const { full_name, phone_number, email, gender, pass_out_year } = req.body;

  switch (method) {
    case "POST":
      try {
        const newAlumni = new Alumni({
          name: full_name.join(" "),
          phoneNo: phone_number,
          passoutYear: pass_out_year,
          email,
          gender,
        });
        const doc = await newAlumni.save();
        console.log(doc);
        res.status(201).json({ success: true });
      } catch {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
