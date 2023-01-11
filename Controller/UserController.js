import User from '../Database/UserModel.js';
import crypto from 'crypto';


export const register = async (req,res) => {

    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            res.status(401).json({'message':'user already registered'});
        }else{
            const hash = crypto.createHash('md5').update(req.body.password).digest('hex');
            const obj = new User({name:req.body.name,email:req.body.email,mobile:req.body.mobile,picture:req.file.filename,password:hash});
            const user = await obj.save();
            res.status(201).json({user});
        }
        
    } catch (error) {
        res.status(400).json(error.message);
    }
};
export const getAllUsers = async (req,res) => {

    try {
        const user = await User.find();
        res.status(201).json({user});
        
    } catch (error) {
        res.status(400).json(error.message);
    }
};
export const getOneUser = async (req,res) => {

    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(201).json({user});
        
    } catch (error) {
        res.status(400).json(error.message);
    }
};
export const update = async (req,res) => {
    const id = req.params.id;

    try {         
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
         await User.findByIdAndUpdate(id,req.body);
        res.status(201).json({message:'Updated'});
        
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const deleteUser = async (req,res) => {
    const id = req.params.id;

    try {         
         await User.findByIdAndDelete(id);
         res.status(201).json({message: 'User successfully deleted'});
    } catch (error) {
        res.status(400).json(error.message);
    }
};

