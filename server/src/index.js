import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'

const app= express()
const PORT = process.env.PORT || 4000
const uri = `mongodb+srv://artcevvv:MERNRecipes@cluster0.yri1xlx.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0`

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
