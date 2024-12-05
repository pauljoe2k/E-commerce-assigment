const UserModel=require('../models/user.model.js');
const errorHandler=require('../errorHandler.js');
export async function createUser(req,res){
    const {Name, email, password}=req.body;
    const checkUserPresent=await UserModel.findOne({
        email:email,
    })
    if(checkUserPresent){
        return new errorHandler("Already present in DB ",400)
    }
    const newUser=new UserModel({
        Name:Name,
        email:email,
        password:password,
    });
    await userModel.save();
    return res.send('User created successfully!');
}
