import mongoose from "mongoose";

// schema User
const schemaUser = {
  email: String,
  password: String,
};

// User model
const UserModel = mongoose.model("User", schemaUser, "users");

export default UserModel;
