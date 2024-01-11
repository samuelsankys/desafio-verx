import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace CreateProducerErrors {
  export class ProducerAlreadyExistsError extends UseCaseError {
    constructor() {
      super('Produtor já está cadastrado.')
    }
  }
}
