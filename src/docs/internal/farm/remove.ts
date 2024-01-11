export default {
  delete: {
    tags: ['Fazenda'],
    summary: 'Remove uma Fazenda.',
    description: 'Responsável remover uma Fazenda',
    operationId: 'remove-farm',
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
