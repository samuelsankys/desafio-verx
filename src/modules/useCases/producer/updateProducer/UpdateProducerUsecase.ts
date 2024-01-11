import { right, type Either, left } from '@/shared/core/Either'
import { UpdateProducerErrors } from './UpdateProducerErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type UpdateProducerRequestDTO } from './UpdateProducerValidator'
import { ProducerName } from '@/modules/domain/producer/ProducerName'
import { ProducerCnpjCpf } from '@/modules/domain/producer/ProducerCnpjCpf'
import { Producer } from '@/modules/domain/producer/Producer'
import { ProducerMap } from '@/modules/mappers/ProducerMapper'
import { type ProducerDTO } from '@/modules/dtos/ProducerDTO'
import { type IProducerRepository } from '@/modules/repositories/IProducerRepository'

export type UpdateProducerResponse = Either<UpdateProducerErrors.ProducerNotExistsError | Error, ProducerDTO>

export class UpdateProducerUseCase implements UseCase<UpdateProducerRequestDTO, Promise<UpdateProducerResponse>> {
  constructor(private readonly producerRepo: IProducerRepository) {}

  async perform(request: UpdateProducerRequestDTO): Promise<UpdateProducerResponse> {
    const producerNameOrError = ProducerName.create({ value: request.name })
    const producerCnpjCpfOrError = ProducerCnpjCpf.create({ value: request.cpfCnpj })
    if (producerNameOrError.isLeft()) return left(producerNameOrError.value)
    if (producerCnpjCpfOrError.isLeft()) return left(producerCnpjCpfOrError.value)

    const name: ProducerName = producerNameOrError.value
    const cnpjCpf: ProducerCnpjCpf = producerCnpjCpfOrError.value

    const producerExists = await this.producerRepo.getById(request.producerId)
    if (!producerExists) return left(new UpdateProducerErrors.ProducerNotExistsError())

    const producerOrError = Producer.create({ name, cnpjCpf }, request.producerId)
    if (producerOrError.isLeft()) return left(producerOrError.value)

    const producer = producerOrError.value
    await this.producerRepo.save(producer)

    return right(ProducerMap.toDTO(producer))
  }
}
