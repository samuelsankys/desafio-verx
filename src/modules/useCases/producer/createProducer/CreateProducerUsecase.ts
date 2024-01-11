import { right, type Either, left } from '@/shared/core/Either'
import { CreateProducerErrors } from './CreateProducerErrors'
import { type UseCase } from '@/shared/core/domain/UseCase'
import { type CreateProducerRequestDTO } from './CreateProducerValidator'
import { ProducerName } from '@/modules/domain/producer/ProducerName'
import { ProducerCnpjCpf } from '@/modules/domain/producer/ProducerCnpjCpf'
import { Producer } from '@/modules/domain/producer/Producer'
import { ProducerMap } from '@/modules/mappers/ProducerMapper'
import { type ProducerDTO } from '@/modules/dtos/ProducerDTO'
import { type IProducerRepository } from '@/modules/repositories/IProducerRepository'

export type CreateProducerResponse = Either<CreateProducerErrors.ProducerAlreadyExistsError | Error, ProducerDTO>

export class CreateProducerUseCase implements UseCase<CreateProducerRequestDTO, Promise<CreateProducerResponse>> {
  constructor(private readonly producerRepo: IProducerRepository) {}

  async perform(request: CreateProducerRequestDTO): Promise<CreateProducerResponse> {
    const producerNameOrError = ProducerName.create({ value: request.name })
    const producerCnpjCpfOrError = ProducerCnpjCpf.create({ value: request.cpfCnpj })
    if (producerNameOrError.isLeft()) return left(producerNameOrError.value)
    if (producerCnpjCpfOrError.isLeft()) return left(producerCnpjCpfOrError.value)

    const name: ProducerName = producerNameOrError.value
    const cnpjCpf: ProducerCnpjCpf = producerCnpjCpfOrError.value

    const producerAlreadyExists = await this.producerRepo.exists(cnpjCpf.value)
    if (producerAlreadyExists !== null) return left(new CreateProducerErrors.ProducerAlreadyExistsError())

    const producerOrError = Producer.create({ name, cnpjCpf })
    if (producerOrError.isLeft()) return left(producerOrError.value)

    const producer = producerOrError.value
    await this.producerRepo.create(producer)

    return right(ProducerMap.toDTO(producer))
  }
}
