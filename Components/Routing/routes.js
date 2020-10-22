import sqlite3 from 'sqlite3';
import Data from '../Connection.js'

//QUERY THAT RETURN ALL TUPLES OF A TABLE
export const All = (req, res)=>{
Data.all("SELECT * FROM Classes", (err, row)=>{
    if(err)
        console.log(err);
    else    
        console.log(row);
        res.send(row);
})
}

//A FILTER SEARCH FUCNTION
export const firstFilter = (req, res) =>{
Data.serialize( ()=>{
    
    Data.all("SELECT * FROM Classes WHERE c_bore >= ?", [req.params.bore], (err, row)=>{
        if(err)
            console.log(err)
        else
            console.log(row);
            res.send(row);
            
    })
})
}

//CREATES NEW ENTRIES
export const create = (req, res)=>{

Data.serialize(()=>{
    Data.run("INSERT INTO greetings(message) VALUES (?)", [req.params.message], (err, row)=>{
        if(err)
            console.log(err);
        else
            console.log(JSON.stringify(row));
            res.send(row);
    })
})
};


//MAKES UPDATES TO TUPLES THAT SATISFY THE CONDITION
export const update = (req, res)=>{
Data.serialize(()=>{
    Data.run("UPDATE greetings SET message = ? WHERE message = ?", [req.params.newmessage , req.params.oldmessage], (err, row)=>{
        if(err)
            console.log(err)
        else
            console.log(row);
            res.send(row);
        
    })
})
};

//REMOVES THE TUPLES THAT SATISFY THE CONDITION
export const remove = (req, res)=>{

    const {message} = req.body;

Data.serialize(()=>{
    Data.run("DELETE FROM greetings WHERE message LIKE (?)", [req.params.message], (err, row)=>{
        if(err)
            console.log(err);
        else
            console.log(row)
            res.send(row);

    })
})
};

export default Data;

