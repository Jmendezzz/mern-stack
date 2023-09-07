import { Types } from "mongoose";
import { User } from "../models/UserModel.js";

export class CurrentUserDTO{

    public userId:Types.ObjectId;
    public name:string;
    public lastName:string;
    public email:string;
    public location:string | null;
    public role:string;
    constructor(user:User, id: Types.ObjectId){
        this.userId = id;
        this.name = user.name;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
        this.location = user.location;

    }
}