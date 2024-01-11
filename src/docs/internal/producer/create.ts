export default {
  post: {
    tags: ['Produtor'],
    summary: 'Cria uma Produtor.',
    description: 'Responsável criar uma Produtor',
    operationId: 'create-producer',
    security: [{ token: [] }],
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
      200: {
        description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/resProducer',
            },
          },
        },
      },
      400: { $ref: '#/errors/clientError' },
      404: { $ref: '#/errors/notFoundError' },
      409: { $ref: '#/errors/conflictError' },
      500: { $ref: '#/errors/serverError' },
    },
  },
}
