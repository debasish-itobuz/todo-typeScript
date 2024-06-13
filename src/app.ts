import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express'
import { Server } from 'http'
import createHttpError from 'http-errors'
import todoRoutes from './routes/todoRoute'
import connectToDb from './config/dbConnection';
import { config } from 'dotenv'

config()
connectToDb()

const app: Application = express()
const PORT: Number = Number(process.env.PORT) || 4003

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello from ts app !!!!")
// })

app.use(express.json())
app.use('/todo', todoRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound())
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message,
    })
}

app.use(errorHandler)

const server: Server = app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})