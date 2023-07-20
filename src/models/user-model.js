import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const SALT=10;
const userSchema= new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

},{timestamps:true})

userSchema.pre('save', async function (next) {
    try {

     const encryptedPassword = await bcrypt.hash(this.password, SALT);
      this.password = encryptedPassword;
  
      next();
    } catch (err) {
      return next(err);
    }
  });
const user=  mongoose.model('user',userSchema)
export default user;