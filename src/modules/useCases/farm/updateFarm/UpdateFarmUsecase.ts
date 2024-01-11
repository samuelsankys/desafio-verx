import { right, type Either, left } from '@/shared/core/Either'
import { UpdateFarmErrors } from './UpdateFarmErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type UpdateFarmRequestDTO } from './UpdateFarmValidator'
import { type IFarmRepository } from '@/modules/repositories/IFarmRepository'
import { FarmName } from '@/modules/domain/farm/FarmName'
import { Farm } from '@/modules/domain/farm/Farm'

export type UpdateFarmResponse = Either<UpdateFarmErrors.FarmNotExistsError | Error, null>

export class UpdateFarmUseCase implements UseCase<UpdateFarmRequestDTO, Promise<UpdateFarmResponse>> {
  constructor(private readonly farmRepo: IFarmRepository) {}

  async perform(request: UpdateFarmRequestDTO): Promise<UpdateFarmResponse> {
    const farmNameOrError = FarmName.create({ value: request.name })
    if (farmNameOrError.isLeft()) return left(farmNameOrError.value)

    const name: FarmName = farmNameOrError.value

    const farmExists = await this.farmRepo.getById(request.farmId)
    if (!farmExists) return left(new UpdateFarmErrors.FarmNotExistsError())
    const { farmId, ...rest } = request
    const farmOrError = Farm.create({ ...rest, name }, farmId)
    if (farmOrError.isLeft()) return left(farmOrError.value)

    const farm = farmOrError.value
    await this.farmRepo.save(farm)

    return right(null)
  }
}
