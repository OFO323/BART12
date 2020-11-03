import express from 'express';
import {Assets, WorkOrders, firstFilter, create, update, remove} from '../Connection/Connection.js';
import sqlite3 from 'sqlite3';


const routes = express.Router();


routes.get('/Assets', Assets);
routes.get('/Workorders', WorkOrders);



routes.post('/:message', create);

routes.get('/:bore', firstFilter);

routes.delete('/:message', remove);

    

routes.patch('/:oldmessage/:newmessage', update)



export default routes;