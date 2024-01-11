export default {
  notFoundError: {
    description: 'NOT FOUND ERROR. Essa informação não foi encontrada.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'NotFoundError',
            },
            message: {
              type: 'object',
              example: 'mensagem do erro.',
            },
          },
        },
      },
    },
  },
}
