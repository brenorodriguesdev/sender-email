import { httpServer } from './app'
import '../routes'

httpServer.listen(process.env.PORT ?? 3000)
