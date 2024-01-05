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
    },
    attachments: {
      type: 'array',
      items: {
        type: 'string',
        format: 'binary'
      }
    }
  },
  required: ['subject', 'html', 'destinationName', 'destinationEmail']
}
