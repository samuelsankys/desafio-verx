import { right, type Either } from '@/shared/core/Either'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type DashboardFarmErrors } from './DashboardFarmErrors'
import { type FarmDTO } from '@/modules/dtos/FarmDTO'
import { type IFarmRepository } from '@/modules/repositories/IFarmRepository'
import { type DashboardFarmRequestDTO } from './DashboardFarmController'

export type DashboardFarmResponse = Either<DashboardFarmErrors.FarmNotExistsError | Error, FarmDTO>

export class DashboardFarmUseCase implements UseCase<DashboardFarmRequestDTO, Promise<DashboardFarmResponse>> {
  constructor(private readonly farmRepo: IFarmRepository) {}

  async perform(_request: DashboardFarmRequestDTO): Promise<DashboardFarmResponse> {
    const result = await this.farmRepo.dashboard()
    return right(result)
  }
}
