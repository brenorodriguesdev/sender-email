import { type Response } from 'express'

const noContent = (response: Response): Response => response.status(204).send()
const badRequest = (response: Response, message: string): Response => response.status(400).json({ message })
const unauthorized = (response: Response, message: string): Response => response.status(401).json({ message })
const serverError = (response: Response): Response => response.status(500).json({ message: 'Internal Server Error' })

export {
  noContent,
  badRequest,
  unauthorized,
  serverError
}
