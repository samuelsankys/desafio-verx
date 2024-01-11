import producer from './producer'
import farm from './farm'
export default {
  components: {
    schemas: {
      ...producer,
      ...farm,
      Error: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          error: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
}
