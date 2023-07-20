import UserService from '../service/user-service.js'
const userService =new UserService()

export const create= async (req,resp)=>{
    try {
        const response =await userService.create({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })
        return resp.status(201).json({
            data:response,
            success:true,
            message:'Succesfully created user',
            err:{}
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:error.message,
            err:error
        })
    }
}
export const signIn= async(req,resp)=>{
    try {
        const response =await userService.signIn(req.body.email,req.body.password)
        return resp.status(201).json({
            data:response,
            success:true,
            message:'Succesfully sign in user',
            err:{}
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:error.message,
            err:error
        })
    }
}
export const isAuthenticated= async (req,resp)=>{

    try {
        const token=req.headers['x-access-token'];
        console.log(token);
        const response=await userService.isAuthenticated(token)     
        return resp.status(200).json({
            success:true,
            err:{},
            data:response,
            message:'user is authenticated and token is valid'
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            err:error
        })
    }

}

