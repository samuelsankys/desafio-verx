export default {
  get: {
    tags: ['Fazenda'],
    summary: 'Dashboard da Fazenda.',
    description: 'Responsável mostrar dados para o dashboard de Fazenda.',
    operationId: 'dashboard-farm',
    security: [{ token: [] }],
    responses: {
      200: {
        description: 'SUCESSO. A requisição foi atendida e resultou em resposta.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/resDashboard',
            },
          },
        },
      },
      400: { $ref: '#/errors/clientError' },
      404: { $ref: '#/errors/notFoundError' },
      500: { $ref: '#/errors/serverError' },
    },
  },
}
