import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace UpdateFarmErrors {
  export class FarmNotExistsError extends UseCaseError {
    constructor() {
      super('Fazenda não encontrada.')
    }
  }
}
