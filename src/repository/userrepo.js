import user from '../models/user-model.js';
class UserRepository{

    async create(data){
        try {
            const User= await user.create(data);
            return User
        } catch (error){
            console.log('error happen');
            throw error
        }
    }

    async destroy(userId){
        try {
            const User= await user.destroy(
               {
                    id:userId
                }
            );
            return true
        } catch (error) {
            console.log("something wrong in user repo");
            throw error
        }
    }
    async getById(userId)
    {
        try {
           const User= await user.findOne({ _id: userId }, 'email id name').exec()
           return User
        } catch (error) {
            console.log("something wrong in user repo");
            throw error
        }

    }
    
    async getByEmail(email){
        try {
            const User= await user.findOne({

                    email:email
            })
            if(!user){
                
                throw error={
                    name:'AttributeNotFound',
                    message:'Invalid Email Sent in Request',
                    explanation:'Please check if email is registered',
                    statusCode:404
                    }
            }
            return User
         } catch (error) {
             console.log("something wrong in user repo");
             throw error
         }
    }
}
export default UserRepository