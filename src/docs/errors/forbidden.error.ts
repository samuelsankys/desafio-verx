export default {
  forbiddenError: {
    description: 'FORBIDDEN ERROR. Client não tem acesso a essa rota.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'ForbiddenError',
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
