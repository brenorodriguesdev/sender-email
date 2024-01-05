import cors from 'cors'
import express from 'express'
import { createServer } from 'http'

const app = express()
app.use(express.json())
app.use(cors())
const httpServer = createServer(app)

export { app, httpServer }
