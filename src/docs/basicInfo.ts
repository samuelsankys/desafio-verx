import packageJson from '../../package.json'

export = {
  openapi: '3.0.1',
  info: {
    version: packageJson.version,
    title: 'App Brain Agriculture ',
    description: 'Apis responsável por cuidar das operações da Brain Agriculture',
    contact: {
      name: 'samuel_sankys@hotmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3563/api/v1/',
      description: 'Local Server',
    },
  ],
  tags: [
    {
      name: 'Produtor',
      description: 'Responsável pelas informações dos produtores.',
    },
    {
      name: 'Fazenda',
      description: 'Responsável pelas informações das Fazendas.',
    },
  ],
}
