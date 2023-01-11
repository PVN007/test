import mongoose from "mongoose";


const db = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/test',(err) => {
    if (err) {
        console.log(err);
    }
    console.log('mongodb is connected');
});
}

export default db;