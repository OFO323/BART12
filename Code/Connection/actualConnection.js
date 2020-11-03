import sqlite3 from 'sqlite3';

let Data = new sqlite3.Database('./Bart12.db', sqlite3.OPEN_READWRITE , (err)=>{
    if(err)
        console.log(err);
    else
        console.log("Success");
})

// export.module.Data; 

export default Data;