import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passoutYear: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  madhyamikRoll: {
    type: String,
    required: true,
  },
  madhyamikNo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  phoneNo: {
    type: String,
    d: true,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    default: "male",
  },
  dob: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

mongoose.models = {};

var Alumni = mongoose.model("Alumni", AlumniSchema);

export default Alumni;
