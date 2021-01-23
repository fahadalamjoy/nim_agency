const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const routesUrls = require('./routes/routes')
const cors =require('cors')

dotenv.config()
mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_ACCESS,
    {  useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true },
    ()=>console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

// if(process.env.NODE_ENV === 'production'){

// }

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=> console.log('server started'))