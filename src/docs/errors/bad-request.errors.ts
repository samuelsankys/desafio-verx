export default {
  badRequestError: {
    description: 'BADREQUEST ERROR. Essa informação já existe no servidor.',
    content: {
      'application/json': {
        schema: {
          properties: {
            error: {
              type: 'string',
              example: 'BadrequestError',
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
