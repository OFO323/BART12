import sqlite3 from 'sqlite3';
import Data from './actualConnection.js'



//pull up specific notif type
export const notifSearch_type = (req, res) => {
    Data.serialize( () => {
        Data.all("SELECT projID, name, phase, time_at FROM notifUpdates WHERE notifType = ? AND strftime('%W', time_at) LIKE strftime('%W', ?) OR strftime('%W', time_at) LIKE strftime('%W', ?) - 1",[req.params.type, req.params.date,req.params.date] , (err, row) =>{
            if(err){
                console.log(err);
            } else {
                //console.log(row);
                res.send(JSON.stringify(row));
            }
        })

    })
}

//pull all notifications 
export const notifSearch = (req, res) => {
    Data.all("SELECT * FROM notifUpdates", (err, row) =>{
        if(err){
            console.log(err);
        } else {
            //console.log(row);
            res.send(JSON.stringify(row));
        }
    })
}

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
Data.all("Select * from Assets ORDER BY a_readdate DESC", (err, row)=>{
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
            res.send(JSON.stringify(row));
        }
    })
}

export const Updates2 = (req, res) => {
    Data.all("SELECT * FROM projectUpdates WHERE strftime('%W', updated_at) LIKE strftime('%W', ?) OR strftime('%W', updated_at) LIKE strftime('%W', ?) - 1",[req.params.date] , (err, row) =>{
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

export const Single = (req, res)=>{
    Data.serialize( ()=>{
        Data.all("SELECT * FROM Assets WHERE a_projectid LIKE (?) AND a_dept LIKE (?) AND a_metername LIKE (?) GROUP BY a_metername ORDER BY a_readdate ", [req.params.Anum, req.params.Adept, req.params.Ameter], (err, row)=>{
            if(err)
                console.log(err)
            else
                res.send(row)
        })
    })
}

export const create = (req, res)=>{

    console.log(req.body);

    const user = {
        "w_projectid": req.body['w_projectid'][0],
        "w_WOnum": req.body['w_WOnum'][0],
        "w_desc": req.body['w_desc'][0],
        "w_status": req.body['w_status'][0],
        "w_reporteddate": req.body['w_reporteddate'][0],
        "w_location": req.body['w_location'][0],
        "w_type": req.body['w_type'][0],
        "w_TPID": req.body['w_TPID'][0],
        "w_PSProject": req.body['w_PSProject'][0],
        "w_PSProjDesc": req.body['w_PSProjDesc'][0],
        "w_PSActivity": req.body['w_PSActivity'][0],
        "w_PSActDesc": req.body['w_PSActDesc'][0]
    }

    console.log(user['w_projectid'])
Data.serialize(()=>{
    
    Data.run("INSERT INTO Workorder VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",  user["w_projectid"], user["w_WOnum"], user["w_desc"], user["w_status"], user["w_reporteddate"], user["w_location"], user["w_type"], user["w_TPID"], user["w_PSProject"], user["w_PSProjDesc"], user["w_PSActivity"], user["w_PSActDesc"], (err, row)=>{
        if(err)
            console.log(err);
            //res.send(err);
        else
            // console.log(JSON.stringify(row));
            res.send(row);
    })
})
};


export const update = (req, res)=>{
    // console.log(req.body)
    // console.log(`${req.body['Workorder.w_projectid']}`)
    // console.log(req.body["Workorder.w_WOnum"])

    const sql = `UPDATE Workorder SET w_WOnum, w_desc, w_status, w_reporteddate, w_location, w_type, w_TPID, w_PSProject, w_PSProjDesc, w_PSActivity, w_PSActDesc = (${req.body['Workorder.w_WOnum']}, ${req.body['Workorder.w_desc']}, ${req.body['Workorder.w_status']}, ${req.body['Workorder.w_reporteddate']}, ${req.body['Workorder.w_location']}, ${req.body['Workorder.w_type']}, ${req.body['Workorder.w_TPID']}, ${req.body['Workorder.w_PSProject']}, ${req.body['Workorder.w_PSProjDesc']}, ${req.body['Workorder.w_PSActivity']}, ${req.body['Workorder.w_PSActDesc']}) WHERE w_projectid = (${req.body['Workorder.w_projectid']})`;
    
    const values = [
        req.body['w_WOnum'],
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
    //console.log(values)

    // console.log(`$2`);

    const sql2 = `UPDATE Workorder SET w_projectid = ?, w_desc = ?, w_status = ?, w_reporteddate = ?, w_location = ?, w_type = ?, w_TPID = ?, W_PSProject = ?, w_PSProjDesc = ?, w_PSActivity = ?, w_PSActDesc = ?  WHERE w_WOnum = ?`
   // const user = [req.body]
Data.serialize(()=>{
    Data.run( sql2, [req.body['w_projectid'], req.body['w_desc'], req.body['w_status'], req.body['w_reporteddate'], req.body['w_location'], req.body['w_type'], req.body['w_TPID'], req.body['w_PSProject'], req.body['w_PSProjDesc'], req.body['w_PSActivity'], req.body['w_PSActDesc'], req.body['w_WOnum']], (err, row)=>{
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
                //console.log("Delete Successful")    
                res.send(res.row);
    
        })
    })
};
    

export default Data;

