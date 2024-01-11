import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace DeleteFarmErrors {
  export class FarmNotExistsError extends UseCaseError {
    constructor() {
      super('Fazenda não encontrada.')
    }
  }
}
