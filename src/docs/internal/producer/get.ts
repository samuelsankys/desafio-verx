export default {
  get: {
    tags: ['Produtor'],
    summary: 'Pega uma Produtor.',
    description: 'Responsável visualizar as informações de um Produtor',
    operationId: 'get-producer',
    security: [{ token: [] }],
    parameters: [
      {
        name: 'producerId',
        in: 'path',
        description: 'Identificador da Produtor.',
        required: true,
        example: '45nk56j4-456hjjhl-2kj234-23423-2342',
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
