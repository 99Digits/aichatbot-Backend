require('dotenv').config()
require('./db/connection')
const express=require(`express`)
const router=require('./router/router')
const server=express()
const cors=require('cors')
const bodyParser = require('body-parser');

const PORT=4000


server.use(express.json())
server.use(bodyParser.json());
server.use(cors())
server.use(router)

server.listen(PORT,()=>{
    console.log(`server is listening to port number ${PORT}`);
})
