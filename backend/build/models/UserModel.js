import { Schema, model } from "mongoose";
import { Roles } from "../enums/RolesEnum.js";
const UserSchema = new Schema({
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
