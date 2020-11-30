import express from 'express';
import {Assets, WorkOrders, firstFilter, AssetNum, create, update, remove, Updates} from '../Connection/Connection.js';
import sqlite3 from 'sqlite3';


const routes = express.Router();


routes.get('/Assets', Assets);
routes.get('/Workorders', WorkOrders);

//notifications data req - working
routes.get('/projUpdates', Updates);

routes.post('/create', create);

routes.get('/:w_WOnum', firstFilter);

routes.get('/Assets/:Anum', AssetNum);

routes.delete('/:projectid/:WOnum', remove);

    

routes.put('/edit', update)




export default routes;

