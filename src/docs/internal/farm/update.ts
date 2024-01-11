export default {
  put: {
    tags: ['Fazenda'],
    summary: 'Atualiza uma Fazendaa.',
    description: 'Responsável atualizar as informações de uma Fazenda',
    operationId: 'update-farm',
    security: [{ token: [] }],
    parameters: [
      {
        name: 'farmId',
        in: 'path',
        description: 'Identificador da Fazenda.',
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
            $ref: '#/components/schemas/reqFarm',
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
