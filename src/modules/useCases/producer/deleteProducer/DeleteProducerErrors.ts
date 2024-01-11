import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace DeleteProducerErrors {
  export class ProducerNotExistsError extends UseCaseError {
    constructor() {
      super('Produtor não encontrado.')
    }
  }
}
