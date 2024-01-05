import { type NextFunction, type Request, type Response } from 'express'
import { unauthorized } from '../utils/http-helper'
import { verify } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export const isAuthenticated = (request: Request, response: Response, next: NextFunction): undefined | Response => {
  try {
    const authHeader = request.headers.authorization
    const [, accessToken] = authHeader ? authHeader.split('Bearer ') : ''

    if (!accessToken) {
      return unauthorized(response, 'token is required!')
    }

    verify(accessToken, String(process.env.APP_SECRET))
    next()
  } catch (error) {
    return unauthorized(response, 'token is invalid!')
  }
}
