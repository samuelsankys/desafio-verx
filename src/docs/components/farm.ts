export default {
  reqFarm: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nome da Fazenda',
        example: 'Fazenda Teste',
      },
      producerId: {
        type: 'string',
        description: 'identificador do produtor',
        example: 'a7cde030-c3c1-4472-876c-0044be539e79',
      },
      city: {
        type: 'string',
        description: 'Nome da cidade',
        example: 'Petrolina',
      },
      state: {
        type: 'string',
        description: 'Nome do Estado',
        example: 'Pernambuco',
      },
      totalAreaHec: {
        type: 'number',
        description: 'Área total da fazenda em hectare',
        example: '10',
      },
      agricuturalAreaHec: {
        type: 'number',
        description: 'Tamanho da área agritural em hectare',
        example: '2',
      },
      vegetationAreaHec: {
        type: 'number',
        description: 'Tamanho da vegetação em hectare',
        example: '3',
      },
      plantedCulture: {
        type: 'array',
        description: 'Tipo de cultura da Fazenda',
        example: ['SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE'],
      },
    },
  },

  resFarm: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'identificador da fazenda',
        example: 'e7ccba9b-4a9c-4795-b059-dfb2663c75c6',
      },
      name: {
        type: 'string',
        description: 'Nome da Fazenda',
        example: 'Fazenda Teste',
      },
      producerId: {
        type: 'string',
        description: 'identificador do produtor',
        example: 'a7cde030-c3c1-4472-876c-0044be539e79',
      },
      city: {
        type: 'string',
        description: 'Nome da cidade',
        example: 'Petrolina',
      },
      state: {
        type: 'string',
        description: 'Nome do Estado',
        example: 'Pernambuco',
      },
      totalAreaHec: {
        type: 'number',
        description: 'Área total da fazenda em hectare',
        example: '10',
      },
      agricuturalAreaHec: {
        type: 'number',
        description: 'Tamanho da área agritural em hectare',
        example: '2',
      },
      vegetationAreaHec: {
        type: 'number',
        description: 'Tamanho da vegetação em hectare',
        example: '3',
      },
      plantedCulture: {
        type: 'array',
        description: 'Tipo de cultura da Fazenda',
        example: ['SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE'],
      },
    },
  },

  resDashboard: {
    type: 'object',
    properties: {
      totalFarm: {
        type: 'number',
        description: 'Total da quantidade de Fazendas',
        example: 2,
      },
      totalArea: {
        type: 'number',
        description: 'Total da área das Fazendas',
        example: 2,
      },
      percentByState: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            state: {
              type: 'string',
              description: 'Estado',
              example: 'Petrolina',
            },
            percent: {
              type: 'number',
              description: 'Porcentagem',
              example: 2,
            },
          },
        },
      },
      percentTotalAreaUse: {
        type: 'object',
        properties: {
          agriculturalAreaHec: {
            type: 'number',
            description: 'Porcentagem de área de agricultura',
            example: 2,
          },
          vegetationAreaHec: {
            type: 'number',
            description: 'Porcentagem da quantidade de área de vegetação utilizada',
            example: 2,
          },
        },
      },
    },
  },
}
