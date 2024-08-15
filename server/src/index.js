import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import {PORT, URI} from '../globals.js'
import { recipesRouter } from './routes/recipes.js'

const app= express()
const uri = URI

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipesRouter)

mongoose
    .connect(uri)
    .then(()=>{
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
    })
    .catch(err => {
        throw err;
    }) 
