import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace CreateFarmErrors {
  export class ProducerNotExistsError extends UseCaseError {
    constructor() {
      super('Produtor não encontrado.')
    }
  }
}
