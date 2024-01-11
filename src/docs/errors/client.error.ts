export default {
  clientError: {
    description: 'CLIENT ERROR. Essa informação incorreta do client.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'ClientError',
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
