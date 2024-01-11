import { right, type Either, left } from '@/shared/core/Either'
import { CreateFarmErrors } from './CreateFarmErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type CreateFarmRequestDTO } from './CreateFarmValidator'
import { type IFarmRepository } from '@/modules/repositories/IFarmRepository'
import { FarmName } from '@/modules/domain/farm/FarmName'
import { type IProducerRepository } from '@/modules/repositories/IProducerRepository'
import { Farm } from '@/modules/domain/farm/Farm'
import { FarmMap } from '@/modules/mappers/FarmMapper'
import { type FarmDTO } from '@/modules/dtos/FarmDTO'

export type CreateFarmResponse = Either<CreateFarmErrors.ProducerNotExistsError | Error, FarmDTO>

export class CreateFarmUseCase implements UseCase<CreateFarmRequestDTO, Promise<CreateFarmResponse>> {
  constructor(
    private readonly farmRepo: IFarmRepository,
    private readonly producerRepo: IProducerRepository,
  ) {}

  async perform(request: CreateFarmRequestDTO): Promise<CreateFarmResponse> {
    const farmNameOrError = FarmName.create({ value: request.name })
    if (farmNameOrError.isLeft()) return left(farmNameOrError.value)

    const name: FarmName = farmNameOrError.value

    const producerExists = await this.producerRepo.getById(request.producerId)
    if (!producerExists) return left(new CreateFarmErrors.ProducerNotExistsError())
    const { producerId, ...rest } = request
    const farmOrError = Farm.create({ ...rest, name })
    if (farmOrError.isLeft()) return left(farmOrError.value)

    const farm = farmOrError.value
    console.log({ farm })
    await this.farmRepo.create(farm, request.producerId)

    return right(FarmMap.toDTO(farm))
  }
}
