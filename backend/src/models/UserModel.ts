import { Schema, model } from "mongoose";
import { Roles } from "../enums/RolesEnum.js";

export interface User {
  userId:string; 
  name: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  role: Roles;
}

const UserSchema = new Schema<User>({
  name: String,
  lastName: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  role: {
    type: String,
    enum: Object.values(Roles),
    default: Roles.USER,
    required: true,
  },
});

export default model("User", UserSchema);
