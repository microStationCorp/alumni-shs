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
  phoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Alumni = mongoose.model("Alumni", AlumniSchema);

export default Alumni;
