//User Mongoose Prototype
import mongoose, { Document, Schema } from "mongoose";
 export interface Message extends Document{
   content: string;
   createdAt:Date
}
const MessageSchema :Schema<Message>=new Schema({
   content:{
      type:String,
      required:true
   },
   createdAt:{
      type:Date,
      required:true,
      default:Date.now
   }
});

export interface User extends Document{
   username:string;
   email:string;
   password:string;
   verifyCode:string;
   verifyCodeExpiry:Date;
   isVerified:boolean;
   isAcceptingMessage:boolean;
   // User Document as an array
   message:[]
}

const UserSchema :Schema<User>=new Schema({
   username:{
      type:String,
      required:[true,"Username is required"],
      trim:true,
      unique:true

   },
    email:{
      type: String,
      required:[true,"Email is Required"],
      unique:true,
      match:[/.+\@.+\..+/,"Please Use a valid email address"]
   },
   password:{
      type:String,
      required:[true,"is Required"]
   },
   verifyCode:{
      type:String,
      required:[true,"Verify Code is  Required"]
   },
   verifyCodeExpiry:{
      type:Date,
      required:[true,"Verify code expiry is  Required"]
   },
   isVerified:{
      type:Boolean,
      default:false,
   },
   isAcceptingMessage:{
      type:Boolean,
      default:true,
   },
   message:[MessageSchema]

});

const UserModel=(mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User",UserSchema)
export default UserModel;