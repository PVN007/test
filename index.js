import express from 'express';
import db from './Database/Dbconnection.js';
import router from './Routes/UserRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
 db();
app.use(router);
const port = 2000;
app.listen(port,() => {
    console.log(`http://localhost:${port}`);
});

