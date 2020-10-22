import express from 'express';
import {All, firstFilter, create, update, remove} from './routes';
import sqlite3 from 'sqlite3';

//EXPRESS HAS A ROUTER OBJECT THAT LETS US CREATE ROUTES FOR THE DIFFERENT REQUESTS
const routes = express.Router();

//ROUTES TO THE DIFFERENT FUCNTIONS DEPENDING ON REQUEST
routes.get('/', All);

routes.post('/:message', create);

routes.get('/:bore', firstFilter);

routes.delete('/:message', remove);



routes.patch('/:oldmessage/:newmessage', update)



export default routes;