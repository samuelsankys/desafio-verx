import { right, type Either, left } from '@/shared/core/Either'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type GetProducerRequestDTO } from './GetProducerValidator'
import { ProducerMap } from '@/modules/mappers/ProducerMapper'
import { type ProducerDTO } from '@/modules/dtos/ProducerDTO'
import { type IProducerRepository } from '@/modules/repositories/IProducerRepository'
import { GetProducerErrors } from './GetProducerErrors'

export type GetProducerResponse = Either<GetProducerErrors.ProducerNotExistsError | Error, ProducerDTO>

export class GetProducerUseCase implements UseCase<GetProducerRequestDTO, Promise<GetProducerResponse>> {
  constructor(private readonly producerRepo: IProducerRepository) {}

  async perform(request: GetProducerRequestDTO): Promise<GetProducerResponse> {
    const producerExists = await this.producerRepo.getById(request.producerId)
    if (!producerExists) return left(new GetProducerErrors.ProducerNotExistsError())

    return right(ProducerMap.toDTO(producerExists))
  }
}
