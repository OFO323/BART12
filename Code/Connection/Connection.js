import sqlite3 from 'sqlite3';
import Data from './actualConnection.js'


//used for the search bar in asset page and main page
export const AssetSearch = (req, res) => {
    Data.serialize( () => {

        Data.all("SELECT * FROM Assets WHERE a_metername = ?", [req.params.a_metername], (err, row)=>{
            if(err){
                console.log(err);
            }else {
                res.send(row);
            }
        })
    })
}

//used for the search bar in WO page and main page 
export const WOSearch = (req, res) => {
    Data.serialize( () => {
        Data.all("SELECT * FROM Workorder WHERE w_WOnum = ?", [req.params.w_WOnum], (err, row)=>{
            if(err){
                console.log(err);
            }else {
                res.send(row);
            }
        })
    })
}

export const Assets = (req, res)=>{
Data.all("Select * from Assets", (err, row)=>{
    if(err)
        console.log(err);
    else    
        //console.log(row);
        res.send(JSON.stringify(row));
       
})
}

export const WorkOrders = (req, res) =>{
    Data.all("SELECT * FROM Workorder", (err,row)=>{
        if(err)
            console.log(err);
        else
            //console.log(JSON.stringify(row))
            res.send(JSON.stringify(row));
    })
}

//for data requests for updates [used for notifTable component] -  working 
export const Updates = (req, res) => {
    Data.all("SELECT * FROM projectUpdates", (err, row) =>{
        if(err){
            console.log(err);
        } else {
            //console.log(row);
            res.send(row);
        }
    })
}

export const Updates2 = (req, res) => {
    Data.all("SELECT * FROM projectUpdates WHERE updated_at LIKE ?",[req.params.date] , (err, row) =>{
        if(err){
            console.log(err);
        } else {
            //console.log(row);
            res.send(row);
        }
    })
}

export const firstFilter = (req, res) =>{
Data.serialize( ()=>{
    
    Data.all("SELECT * FROM Workorder WHERE w_WOnum	= ? ", [req.params.w_WOnum], (err, row)=>{
        if(err)
            console.log(err)
        else
            console.log(row);
            res.send(row);
            
    })
})
}

export const AssetNum = (req, res)=>{
    //console.log("Entered");
    //console.log(req.params)
    Data.serialize( ()=>{
        Data.all("SELECT * FROM Assets WHERE a_projectid LIKE ? ORDER BY a_readdate", [req.params.Anum], (err, row)=>{
            if(err)
                console.log(err)
            else
                //console.log(JSON.stringify(row))
                res.send(row)

        })
    })
}

export const DeptName = (req, res)=>{
    Data.serialize( ()=>{
        Data.all("SELECT * FROM Assets WHERE a_projectid LIKE (?) AND a_dept LIKE (?) ORDER BY a_readdate", [req.params.Anum, req.params.Adept], (err, row)=>{
            if(err)
                console.log(err)
            else
                //console.log(row)
                res.send(row)
        } )
    })
}

export const MName = (req, res)=>{
    Data.serialize( ()=>{
        Data.all("SELECT * FROM Assets WHERE a_projectid LIKE (?) AND a_dept LIKE (?) AND a_metername LIKE (?) ORDER BY a_readdate", [req.params.Anum, req.params.Adept, req.params.Ameter], (err, row)=>{
            if(err)
                console.log(err)
            else
                res.send(row)
        })
    })
}

export const create = (req, res)=>{

    console.log(req.body);

    const user = [req.body]

    // const user = {
    //     "Workorder.w_projectid":"A65",
    //     "Workorder.w_WOnum": 17112036,
    //     "Workorder.w_desc":"A1 Aerial Pier Drainage Weekends 1 & 2",
    //     "Workorder.w_status":"INPRG",
    //     "Workorder.w_reporteddate":44032,
    //     "Workorder.w_location":"A-LINE",
    //     "Workorder.w_type":"CAP",
    //     "Workorder.w_TPID":1000003627,
    //     "Workorder.w_PSProject":"15CQ011",
    //     "Workorder.w_PSProjDesc":"A65/A75 Interlocking(Replacem",
    //     "Workorder.w_PSActivity":"CONST",
    //     "Workorder.w_PSActDesc":"Constructn,Fabricatn,Instalatn"
    // }

    // console.log(user)
Data.serialize(()=>{
    
    Data.run("INSERT INTO Workorder VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",  req.body['Workorder.w_projectid'], req.body['Workorder.w_WOnum'], req.body['Workorder.w_desc'], req.body['Workorder.w_status'], req.body['Workorder.w_reporteddate'], req.body['Workorder.w_location'], req.body['Workorder.w_type'], req.body['Workorder.w_TPID'], req.body['Workorder.w_PSProject'], req.body['Workorder.w_PSProjDesc'], req.body['Workorder.w_PSActivity'], req.body['Workorder.w_PSActDesc'], (err, row)=>{
        if(err)
            console.log(err);
            //res.send(err);
        else
            console.log(JSON.stringify(row));
            //res.send(row);
    })
})
};


export const update = (req, res)=>{
    console.log(req.body)
    console.log(`${req.body['Workorder.w_projectid']}`)
    console.log(req.body["Workorder.w_WOnum"])

    const sql = `UPDATE Workorder SET w_WOnum, w_desc, w_status, w_reporteddate, w_location, w_type, w_TPID, w_PSProject, w_PSProjDesc, w_PSActivity, w_PSActDesc = (${req.body['Workorder.w_WOnum']}, ${req.body['Workorder.w_desc']}, ${req.body['Workorder.w_status']}, ${req.body['Workorder.w_reporteddate']}, ${req.body['Workorder.w_location']}, ${req.body['Workorder.w_type']}, ${req.body['Workorder.w_TPID']}, ${req.body['Workorder.w_PSProject']}, ${req.body['Workorder.w_PSProjDesc']}, ${req.body['Workorder.w_PSActivity']}, ${req.body['Workorder.w_PSActDesc']}) WHERE w_projectid = (${req.body['Workorder.w_projectid']})`;
    
    const values = [
        req.body['Workorder.w_WOnum'],
        req.body['Workorder.w_desc'],
        req.body['Workorder.w_status'],
        req.body['Workorder.w_repoerteddated'],
        req.body['Workorder.w_location'],
        req.body['Workorder.w_type'],
        req.body['Workorder.w_TPID'],
        req.body['Workorder.w_PSProject'],
        req.body['Workorder.w_PSProjDesc'],
        req.body['Workorder.w_PSActivity'],
        req.body['Workorder.w_PSActDesc'],
        req.body['Workorder.w_projectid']
    ]

    // console.log(`$2`);

    const sql2 = `UPDATE Workorder SET w_WOnum = ?, w_desc = ?, w_status = ?, w_reporteddate = ?, w_location = ?, w_type = ?, w_TPID = ?, W_PSProject = ?, w_PSProjDesc = ?, w_PSActivity = ?, w_PSActDesc = ?  WHERE w_projectid LIKE ?`
   // const user = [req.body]
Data.serialize(()=>{
    Data.run( sql2, [req.body['Workorder.w_WOnum'], req.body['Workorder.w_desc'], req.body['Workorder.w_status'], req.body['Workorder.w_reporteddate'], req.body['Workorder.w_location'], req.body['Workorder.w_type'], req.body['Workorder.w_TPID'], req.body['Workorder.w_PSProject'], req.body['Workorder.w_PSProjDesc'], req.body['Workorder.w_PSActivity'], req.body['Workorder.w_PSActDesc'], req.body['Workorder.w_projectid']], (err, row)=>{
        //console.log(`$1`);
        if(err)
            console.log(err)
        else
            //console.log(JSON.stringify(row));
            //res.send(row);
            console.log("Successful edit")
        
    })
})
};

export const remove = (req, res)=>{

    console.log(req.params.projectid);
    console.log(req.params.WOnum);


    Data.serialize(()=>{
        Data.each("DELETE FROM Workorder WHERE w_projectid LIKE (?) AND w_WOnum = ?", [req.params.projectid, req.params.WOnum], (err, row)=>{
            if(err)
                console.log(err);
            else
                console.log("Delete Successful")    
                //res.send(res.row);
    
        })
    })
};
    

export default Data;

