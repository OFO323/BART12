import sqlite3 from 'sqlite3';

//OPENNING CONNECTION TO THE DATABASE
let Data = new sqlite3.Database('./database2.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err)
        console.log(err);
    else
        console.log("Success");
});


export default Data;