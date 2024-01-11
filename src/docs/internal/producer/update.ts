export default {
  put: {
    tags: ['Produtor'],
    summary: 'Atualiza uma Produtor.',
    description: 'Responsável atualizar as informações de uma Produtor',
    operationId: 'update-producer',
    security: [{ token: [] }],
    parameters: [
      {
        name: 'producerId',
        in: 'path',
        description: 'Identificador da Produtor.',
        required: true,
        example: '0a33ad23-97eb-4563-a457-72ed6e9514f1',
        type: 'string',
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/reqProducer',
          },
        },
      },
    },
    responses: {
      204: {
        description: 'SUCESSO. A requisição foi atendida mas não tem resposta de retorno.',
      },
      400: { $ref: '#/errors/clientError' },
      404: { $ref: '#/errors/notFoundError' },
      409: { $ref: '#/errors/conflictError' },
      500: { $ref: '#/errors/serverError' },
    },
  },
}
