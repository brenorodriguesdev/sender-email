import validator from 'validator'

export const emailValidator = (data: any, field: string): Error | undefined => {
  const fieldValue = data[field]
  if (typeof fieldValue !== 'string') {
    return new Error(`${field} is not a valid email`)
  }
  const isEmailValid = validator.isEmail(fieldValue)
  if (!isEmailValid) {
    return new Error(`${field} is not a valid email`)
  }
}
