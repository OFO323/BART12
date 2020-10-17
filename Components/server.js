import express from 'express';
import bodyParser from 'body-parser';
import Routes from './router.js';
import cors from 'cors';

//EXPRESS LETS US CREATE A SERVER
let app = express();

//USING THE ROUTER FUNTION TO INTIALIZE THAT WE WILL HAVE DIFFENT TYPES OF REQUESTS
let router = express.Router();

//THIS IS THE MIDDLE WHERE THAT WILL HELP US DISPLAY THE INFORMATION
app.use(bodyParser.json());
app.use(cors());

//INITIALIZE WHAT THE DEFAULT ROUTE WILL BE
app.use('/', Routes);
app.get('/', (req, res, next)=> res.send("WHATS UP"));


//ADDING A LISTENER WILL GIVE THE APP AN ADDRESS WE CAN GO TO
app.listen(4005, (err)=>{
    if(err)
        console.log(err)
    else
        console.log("Server running")
});