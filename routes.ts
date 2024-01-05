import { app } from './src/app'
import { sendEmailController } from './src/controllers/send-email'
import { isAuthenticated } from './src/middlewares/is-authenticated'

app.post('/send', isAuthenticated, sendEmailController)
