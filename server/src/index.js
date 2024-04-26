import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import {PORT, MONGO_USER, URI} from '../globals.js'

const app= express()
const PORT = PORT
const uri = URI

app.use(express.json())
app.use(cors())
app.use('/auth', userRouter)


mongoose
    .connect(uri)
    .then(()=>{
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
    })
    .catch(err => {
        throw err;
    }) 
