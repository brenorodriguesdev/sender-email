import { createQueue } from './amqp'
import { sendEmailQueue } from './queues/send-email'

createQueue('send', sendEmailQueue)
