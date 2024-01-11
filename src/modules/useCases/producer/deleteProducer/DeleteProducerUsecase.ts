import { right, type Either, left } from '@/shared/core/Either'
import { DeleteProducerErrors } from './DeleteProducerErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type DeleteProducerRequestDTO } from './DeleteProducerValidator'
import { type IProducerRepository } from '@/modules/repositories/IProducerRepository'
export type DeleteProducerResponse = Either<DeleteProducerErrors.ProducerNotExistsError | Error, null>

export class DeleteProducerUseCase implements UseCase<DeleteProducerRequestDTO, Promise<DeleteProducerResponse>> {
  constructor(private readonly producerRepo: IProducerRepository) {}

  async perform(request: DeleteProducerRequestDTO): Promise<DeleteProducerResponse> {
    const producerExists = await this.producerRepo.getById(request.producerId)
    if (!producerExists) return left(new DeleteProducerErrors.ProducerNotExistsError())

    // TODO verificar se tem alguma farm
    await this.producerRepo.delete(request.producerId)

    return right(null)
  }
}
