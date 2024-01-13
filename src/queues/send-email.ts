import { requiredFieldsValidator, emailValidator } from '../validators'
// import { sendEmailService } from '../services/send-email'
import { type Channel, type Message } from 'amqplib'

export const sendEmailQueue = async (message: Message | null, channel: Channel): Promise<void | Error> => {
  if (!message) {
    return new Error('payload is required!')
  }

  try {
    const payload = JSON.parse(message.content.toString())
    const requiredFields = ['subject', 'html', 'destinationName', 'destinationEmail']
    const requiredFieldsError = requiredFieldsValidator(payload, requiredFields)
    if (requiredFieldsError) {
      channel.ack(message)
      return new Error(requiredFieldsError.message)
    }
    const emailFieldError = emailValidator(payload, 'destinationEmail')
    if (emailFieldError) {
      channel.ack(message)
      return new Error(emailFieldError.message)
    }
    // await sendEmailService({ ...payload })
  } catch (error) {
    console.log(error)
    channel.ack(message)
    return error
  }
}
