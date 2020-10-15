const knex = require('./Connection');

exports.allInfo = async(req, res)=>{
    //res.json("DATABASE CONNECTION WAS SUCCESSFUL TO ALL");

    knex.select('*')
        .from('Classes')
        .then(userData =>{
            res.json(userData);
        })
        .catch((err) =>{
             res.json("THERE WAS AN ERROR RETRIEVING ALL DATA");
            })
};

exports.createEntry = async(req, res)=>{
    //res.json("CREATE ENTRY FUNCTION REACHED")

    knex('Classes')
        .insert({
            'c_class': req.body.c_class,
            'c_type': req.body.c_type,
            'c_country': req.body.c_country,
            'c_numGuns': req.body.c_numGuns,
            'c_bore': req.body.c_bore,
            'c_displacement': req.body.c_displacement
        })
        .then (() =>{
            res.json({message: "Class" + req.body.c_class + " of type" + req.body.c_type + " from" + req.body.c_country + " and the quantitiy: " + req.body.c_numGuns + " with bore Size" + req.body.c_bore + " finally a displacemnt" + req.body.c_displacement + "added."});
        })
        .catch(err => res.json({message: "THERE WAS AN ERROR CREATING AN ENTRY"}))
}

exports.deleteEntry = async(req,res)=>{
    //res.json("DELETE ENTRY FUNCTION REACHED")

    knex('Classes')
        .where('c_class', req.body.c_class)
        .del()
        .then(() => res.json({message: "SHIP " + req.body.c_class + " DELETED."}))
        .catch(err=> res.json({message: "THERE WAS AN ERROR DELETING AN ENTRY"}))

}

exports.deleteAll  = async(req, res)=>{
    //res.json("DELETE ALL FUNCTION REACHED")

    knex
        .select('*')
        .from('Classes')
        .truncate()
        .then((()=> res.json({message: "ALL SHIPS HAVE BEEN DELETED"})))
        .catch(err=>({message: "THERE WAS A PROBLEM DELETING EVERYTHING"}))
}