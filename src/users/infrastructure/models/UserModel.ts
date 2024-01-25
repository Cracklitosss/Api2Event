import mongoose, { Document, Schema } from "mongoose";
import { User } from "../../domain/User";

const UserSchema = new Schema({
  name: String,
  email: String,
});

export const UserModel = mongoose.model<User & Document>("User", UserSchema);
