export default {
  serverError: {
    description: 'ERRO INTERNO. O servidor encontrou uma condição inesperada que o impediu de atender a requisição.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'ServerError',
            },
            message: {
              type: 'object',
              example: 'Server failed. Try again soon',
            },
          },
        },
      },
    },
  },
}
