import nodemailer from 'nodemailer'
import { type SendEmailProps } from '../contracts/send-email'
import * as dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_TLS === 'true',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

export const sendEmailService = async ({ html, subject, destionationName, destinationEmail, attachments }: SendEmailProps): Promise<void> => {
  await transporter.sendMail({
    to: {
      name: destionationName,
      address: destinationEmail
    },
    from: {
      name: String(process.env.EMAIL_NAME),
      address: String(process.env.EMAIL)
    },
    subject,
    html,
    ...(attachments && {
      attachments: attachments.map((attachment, index) => {
        const tamanhoExtensao = attachment.mimetype === 'image/jpeg' ? 5 : 4
        return {
          filename: `${Date.now()}${attachment.originalname.slice(attachment.originalname.length - tamanhoExtensao, attachment.originalname.length)}`,
          content: attachment.buffer,
          cid: `${index}@cid`
        }
      })
    })
  })
}
