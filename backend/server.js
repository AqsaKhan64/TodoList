import  express from 'express';
import Connection from './db/db.js';
import route from './routes/ToDoRoute.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json())
app.use('/', route)
Connection();
app.listen(4000,()=>{
    console.log("listening to the port no 4000")
})