export const sendEmailParamsSchema = {
  type: 'object',
  properties: {
    subject: {
      type: 'string'
    },
    html: {
      type: 'string'
    },
    destinationName: {
      type: 'string'
    },
    destinationEmail: {
      type: 'string'
    }
  },
  required: ['subject', 'html', 'destinationName', 'destinationEmail']
}
