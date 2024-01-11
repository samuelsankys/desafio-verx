export default {
  reqProducer: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nome da Fazenda',
        example: 'Fazenda Teste',
      },
      cpfCnpj: {
        type: 'string',
        description: 'cpf do produtor',
        example: '604.867.060-52',
      },
    },
  },
  resProducer: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'identificador do produtor',
        example: '0a33ad23-97eb-4563-a457-72ed6e9514f1',
      },
      name: {
        type: 'string',
        description: 'Nome da Fazenda',
        example: 'Fazenda Teste',
      },
      cpfCnpj: {
        type: 'string',
        description: 'cpf do produtor',
        example: '604.867.060-52',
      },
    },
  },
}
