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
        'application/json': {
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
