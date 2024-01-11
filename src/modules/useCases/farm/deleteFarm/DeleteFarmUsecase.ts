import { right, type Either, left } from '@/shared/core/Either'
import { DeleteFarmErrors } from './DeleteFarmErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type IFarmRepository } from '@/modules/repositories/IFarmRepository'
import { type DeleteFarmRequestDTO } from './DeleteFarmValidator'
export type DeleteFarmResponse = Either<DeleteFarmErrors.FarmNotExistsError | Error, null>

export class DeleteFarmUseCase implements UseCase<DeleteFarmRequestDTO, Promise<DeleteFarmResponse>> {
  constructor(private readonly farmRepo: IFarmRepository) {}

  async perform(request: DeleteFarmRequestDTO): Promise<DeleteFarmResponse> {
    const farmExists = await this.farmRepo.getById(request.farmId)
    if (!farmExists) return left(new DeleteFarmErrors.FarmNotExistsError())

    await this.farmRepo.delete(request.farmId)

    return right(null)
  }
}
