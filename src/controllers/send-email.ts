import { type Request, type Response } from 'express'
import { badRequest, noContent, serverError } from '../utils/http-helper'
import { requiredFieldsValidator, emailValidator } from '../validators'
import { sendEmailService } from '../services/send-email'
import { type SendEmailProps } from '../contracts/send-email'

interface SendEmailRequest extends Request {
  body: SendEmailProps
}

export const sendEmailController = async (request: SendEmailRequest, response: Response): Promise<Response> => {
  try {
    const requiredFields = ['subject', 'html', 'destinationName', 'destinationEmail']
    const requiredFieldsError = requiredFieldsValidator(request.body, requiredFields)
    if (requiredFieldsError) {
      return badRequest(response, requiredFieldsError.message)
    }
    const emailFieldError = emailValidator(request.body, 'destinationEmail')
    if (emailFieldError) {
      return badRequest(response, emailFieldError.message)
    }
    await sendEmailService(request.body)
    return noContent(response)
  } catch (error) {
    console.log(error)
    return serverError(response)
  }
}
