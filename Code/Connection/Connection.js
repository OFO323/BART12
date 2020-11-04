import sqlite3 from 'sqlite3';
import Data from './actualConnection.js'


export const Assets = (req, res)=>{
Data.all("Select * from Assets", (err, row)=>{
    if(err)
        console.log(err);
    else    
        //console.log(row);
        res.send(row)
       
})
}

export const WorkOrders = (req, res) =>{
    Data.all("SELECT * FROM Workorder", (err,row)=>{
        if(err)
            console.log(err);
        else
            res.send(row);
    })
}

export const firstFilter = (req, res) =>{
Data.serialize( ()=>{
    
    Data.all("SELECT * FROM Assets WHERE a_meterreading	 >= ?", [req.params.bore], (err, row)=>{
        if(err)
            console.log(err)
        else
            console.log(row);
            res.send(row);
            
    })
})
}

export const create = (req, res)=>{

Data.serialize(()=>{
    Data.run("INSERT INTO greetings(message) VALUES (?)", [req.params.message], (err, row)=>{
        if(err)
            console.log(err);
        else
           // console.log(JSON.stringify(row));
            res.send(row);
    })
})
};


export const update = (req, res)=>{
Data.serialize(()=>{
    Data.run("UPDATE greetings SET message = ? WHERE message = ?", [req.params.newmessage , req.params.oldmessage], (err, row)=>{
        if(err)
            console.log(err)
        else
            //console.log(row);
            res.send(row);
        
    })
})
};

export const remove = (req, res)=>{


Data.serialize(()=>{
    Data.each("DELETE FROM greetings WHERE message LIKE (?)", [req.params.message], (err, row)=>{
        if(err)
            console.log(err);
        else
            //console.log(row)
            res.send(res.row);

    })
})
};

export default Data;

