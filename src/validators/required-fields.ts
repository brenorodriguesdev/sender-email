export const requiredFieldsValidator = (data: any, requiredFields: string[]): Error | undefined => {
  for (const requiredField of requiredFields) {
    if (!data[requiredField]) {
      return new Error(`${requiredField} is required!`)
    }
  }
}
