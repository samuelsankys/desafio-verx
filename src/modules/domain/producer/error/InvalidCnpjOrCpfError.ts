export class InvalidCnpjOrCpfError extends Error {
  constructor() {
    super('CPF ou CNPJ inválido')
  }
}
