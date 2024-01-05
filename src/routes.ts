import { serve, setup } from 'swagger-ui-express'
import { app } from './app'
import { sendEmailController } from './controllers/send-email'
import { isAuthenticated } from './middlewares/is-authenticated'
import swaggerConfig from './docs'
import { noCache } from './middlewares/no-cache'

app.post('/send', isAuthenticated, sendEmailController)
app.use('/docs', noCache, serve, setup(swaggerConfig))
