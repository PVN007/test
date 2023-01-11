import express from 'express';
import multer from 'multer';
import { register,getAllUsers,update,getOneUser,deleteUser} from '../Controller/UserController.js';

const router = express.Router();

const avatar = multer({
    storage:multer.diskStorage({
            destination: (req,file,cb) =>{
                cb(null, 'uploades');
            },
            filename: (req,file,cb) =>{
                    cb(null, file.originalname);
            }
        })
}).single('picture');

router.post('/register',avatar, register);
router.get('/getAllUsers', getAllUsers);
router.put('/update/:id', update);
router.get('/getOneUser/:id', getOneUser);
router.delete('/delete/:id', deleteUser);



export default router;
