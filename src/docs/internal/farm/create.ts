export default {
  post: {
    tags: ['Fazenda'],
    summary: 'Cria uma Fazenda.',
    description: 'Responsável criar uma Fazenda',
    operationId: 'create-farm',
    security: [{ token: [] }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/reqFarm',
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
              $ref: '#/components/schemas/resFarm',
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
