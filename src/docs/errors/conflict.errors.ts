export default {
  conflictError: {
    description: 'CONFLICT ERROR. Essa informação já existe no servidor.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'ConflictError',
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
