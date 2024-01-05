import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Sender E-mail API',
    version: '1.0.0'
  },
  servers: [{
    url: '/'
  }],
  tags: [{
    name: 'Email',
    description: 'E-mail APIs'
  }],
  paths,
  schemas,
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
}
