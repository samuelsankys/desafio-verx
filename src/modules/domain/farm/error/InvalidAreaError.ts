export class InvalidAreaError extends Error {
  constructor() {
    super('A soma da área agrícola e de vegetação não pode ser maior que a área total da fazenda.')
  }
}
