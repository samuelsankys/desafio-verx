import { right, type Either, left } from '@/shared/core/Either'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type GetFarmRequestDTO } from './GetFarmValidator'
import { GetFarmErrors } from './GetFarmErrors'
import { type FarmDTO } from '@/modules/dtos/FarmDTO'
import { FarmMap } from '@/modules/mappers/FarmMapper'
import { type IFarmRepository } from '@/modules/repositories/IFarmRepository'

export type GetFarmResponse = Either<GetFarmErrors.FarmNotExistsError | Error, FarmDTO>

export class GetFarmUseCase implements UseCase<GetFarmRequestDTO, Promise<GetFarmResponse>> {
  constructor(private readonly farmRepo: IFarmRepository) {}

  async perform(request: GetFarmRequestDTO): Promise<GetFarmResponse> {
    const farmExists = await this.farmRepo.getById(request.farmId)
    console.log({ farmExists })

    if (!farmExists) return left(new GetFarmErrors.FarmNotExistsError())

    return right(FarmMap.toDTO(farmExists))
  }
}
