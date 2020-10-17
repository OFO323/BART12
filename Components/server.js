const express = require('express')

const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const classRouter = require('./router');

const PORT = 4002

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/Class', classRouter);

app.use((err, req, res, next)=>{
     console.log(err);
     res.status(500).send("SORRY WE COULD NOT FIND THAT");
})

app.use((req, res, next)=>{
    res.status(404).send("OOPS WE COULD NOT FIND THAT");
})


app.listen(PORT, ()=>{
    console.log("SERVER IS RUNNING ON: " + PORT);
});