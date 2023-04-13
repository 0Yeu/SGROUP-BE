import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './router/user.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/user', userRouter)

app.use('/', (req, res) => {
    res.send('Super Power')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
