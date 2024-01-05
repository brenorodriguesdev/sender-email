import nodemailer from 'nodemailer'
import { type SendEmailProps } from '../contracts/send-email'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_TLS === 'true',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

export const sendEmailService = async ({ html, subject, destionationName, destinationEmail }: SendEmailProps): Promise<void> => {
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
    html
  })
}
