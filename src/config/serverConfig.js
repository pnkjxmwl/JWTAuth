import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()


export const PORT = process.env.PORT;
 const JWT_KEY = process.env.JWT_KEY;
 export default JWT_KEY