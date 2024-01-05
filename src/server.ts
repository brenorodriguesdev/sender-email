import { httpServer } from './app'
import * as dotenv from 'dotenv'
dotenv.config()

httpServer.listen(process.env.PORT ?? 3000)
