import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace UpdateProducerErrors {
  export class ProducerNotExistsError extends UseCaseError {
    constructor() {
      super('Produtor não encontrado.')
    }
  }
}
