
import  jwt  from 'jsonwebtoken'
import UserRepository from '../repository/userrepo.js'
import bcrypt from 'bcrypt'
class UserService {

    constructor(){
        this.userRepository= new UserRepository()
    }

    async create(data)
    {
        try {
            const user= await this.userRepository.create(data);
            return user;
        } 
        catch (error) {
            console.log(error);
                throw error
        }
    }
    async signIn(email,plainPassword)
    {
        try {
            //console.log(email,plainPassword);
            const user= await this.userRepository.getByEmail(email)
            //console.log(user);
            if(!user)
            {
                throw   {error:"not registerd email"}
            }
            const passwordMatch= this.checkPassword(plainPassword,user.password)
            if(!passwordMatch){
                console.log('not matched');
                throw {error:"incorrect pass"}
            }

            const newJWT=this.createToken({
                email:user.email,
                id:user.id
            })
            return newJWT;

        } catch (error) {
            console.log('something wrong in signin');
           // console.log(error.name)
            throw error
        }


    }

     createToken(user){
            try {
                const result= jwt.sign(user, 'pankaj',{expiresIn:'1d'})
                return result;

            } catch (error) {
                console.log('something wrong in token creation')
                throw error
            }

     }
    async isAuthenticated(token){
        try {
            const response= this.verifyToken(token)
                if(!response)
                {
                    throw {error:'invalid token'}
                }
                const user=await this.userRepository.getById(response.id)
                if(!user)
                {
                    throw {error:'noo user with this token exist'}
                }

                return user
        } 
        catch (error) {
            console.log('something wrong in auth process')
            throw error
        }
     }

     verifyToken(token){

        try {
            console.log(token);
            const response=jwt.verify(token,'pankaj')
            return response;

        } catch (error) {
            console.log('something wrong in verify token')
            throw error
        }

     }

     checkPassword(userInputPlainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword)
            
        } catch (error) {
            throw error
        }
     }

}
export default UserService
