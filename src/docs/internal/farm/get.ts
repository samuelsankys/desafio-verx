export default {
  get: {
    tags: ['Fazenda'],
    summary: 'Pega uma Fazendaa.',
    description: 'Responsável atualizar as informações de uma Fazenda',
    operationId: 'get-farm',
    security: [{ token: [] }],
    parameters: [
      {
        name: 'farmId',
        in: 'path',
        description: 'Identificador da Fazenda.',
        required: true,
        example: 'ac95b4eb-b224-4291-be4a-b87560636d50',
        type: 'string',
      },
    ],
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
