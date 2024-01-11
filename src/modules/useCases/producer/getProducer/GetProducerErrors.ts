import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace GetProducerErrors {
  export class ProducerNotExistsError extends UseCaseError {
    constructor() {
      super('Produtor não encontrado.')
    }
  }
}
