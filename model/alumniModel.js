import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  passoutYear: {
    type: Number,
    require: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  madhyamikRoll: {
    type: String,
    require: true,
  },
  madhyamikNo: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  phoneNo: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
  },
});

mongoose.models = {};

var Alumni = mongoose.model("Alumni", AlumniSchema);

export default Alumni;
