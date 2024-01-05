export interface SendEmailProps {
  subject: string
  html: string
  destionationName: string
  destinationEmail: string
  attachments: Express.Multer.File[]
}
