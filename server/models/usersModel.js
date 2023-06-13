import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  namalengkap: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
