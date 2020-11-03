import express from 'express';
import bodyParser from 'body-parser';
import Routes from './Routes/Routes.js';
import cors from 'cors';

let app = express();

let router = express.Router();

app.use(bodyParser.json());
app.use(cors());

let PORT = 4006;


app.use('/', Routes);
app.get('/', (req, res, next)=> res.send("WHATS UP"));

app.listen(PORT, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server running ${PORT}`);
});