import express from 'express';
import {Assets, WorkOrders, MName,DeptName, firstFilter, AssetNum, create, update, remove} from '../Connection/Connection.js';
import {Updates, Updates2, Single} from '../Connection/Connection.js';
import {AssetSearch, WOSearch} from '../Connection/Connection.js';
import {notifSearch_type, notifSearch} from '../Connection/Connection.js';
import sqlite3 from 'sqlite3';


const routes = express.Router();


routes.get('/Assets', Assets);
routes.get('/Workorders', WorkOrders);

//notifications data req - working
routes.get('/projUpdates', Updates);
routes.get('/projUpdates/:date', Updates2);


//any search involving assets
routes.get('/assetSearch/:a_metername', AssetSearch);
//any search involving workorders
routes.get('/woSearch/:w_WOnum', WOSearch);

routes.post('/create', create);

routes.get('/:w_WOnum', firstFilter);

routes.get('/Assets/:Anum', AssetNum);

routes.get('/Assets/:Anum/:Adept', DeptName);

routes.get('/Assets/:Anum/:Adept/:Ameter', MName);
routes.get('/Assets2.0/:Anum/:Adept/:Ameter', Single);

routes.delete('/:projectid/:WOnum', remove);

//notification routes
routes.get('/projNotification/:date/:type', notifSearch_type); 
routes.get('/projNotification/:date/', notifSearch); 

    

routes.put('/edit', update)




export default routes;

