import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace GetFarmErrors {
  export class FarmNotExistsError extends UseCaseError {
    constructor() {
      super('Fazenda não encontrada.')
    }
  }
}
