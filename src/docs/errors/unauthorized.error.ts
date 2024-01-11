export default {
  unauthorizedError: {
    description: 'UNAUTHORIZED ERROR. Client não tem autorização dessa rota.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'UnauthorizedError',
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
