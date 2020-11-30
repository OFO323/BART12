import express from 'express';
import {Assets, WorkOrders, MName,DeptName, firstFilter, AssetNum, create, update, remove} from '../Connection/Connection.js';
import sqlite3 from 'sqlite3';


const routes = express.Router();


routes.get('/Assets', Assets);
routes.get('/Workorders', WorkOrders);



routes.post('/create', create);

routes.get('/:w_WOnum', firstFilter);

routes.get('/Assets/:Anum', AssetNum);

routes.get('/Assets/:Anum/:Adept', DeptName);

routes.get('/Assets/:Anum/:Adept/:Ameter', MName);

routes.delete('/:projectid/:WOnum', remove);

    

routes.put('/edit', update)




export default routes;

