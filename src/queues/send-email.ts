import { type SendEmailProps } from '../contracts/send-email'
import { sendEmailService } from '../services/send-email'
import { sleep } from '../utils/sleep'
import { requiredFieldsValidator, emailValidator } from '../validators'
import { type Channel, type Message } from 'amqplib'

export const sendEmailQueue = async (message: Message | null, channel: Channel): Promise<void | Error> => {
  if (!message) {
    return new Error('payload is required!')
  }

  try {
    const payload: SendEmailProps = JSON.parse(message.content.toString())
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
    await sendEmailService(payload)
    sleep(10000)
  } catch (error) {
    console.log(error)
    channel.ack(message)
    return error
  }
}
