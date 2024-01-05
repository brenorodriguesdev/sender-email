import { app } from './app'
import { sendEmailController } from './controllers/send-email'

app.post('/send', sendEmailController)
