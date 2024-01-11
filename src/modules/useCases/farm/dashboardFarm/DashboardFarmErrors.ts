import { UseCaseError } from '@/shared/core/UseCaseError'

export namespace DashboardFarmErrors {
  export class FarmNotExistsError extends UseCaseError {
    constructor() {
      super('Fazenda não encontrada.')
    }
  }
}
