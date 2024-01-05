export const sendEmailPath = {
  post: {
    security: [{
      bearerAuth: []
    }],
    tags: ['Email'],
    summary: 'Send e-mail API',
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/schemas/sendEmailParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'E-mail sent'
      }
    }
  }
}
