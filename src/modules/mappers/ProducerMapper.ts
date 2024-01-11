import { Producer } from '../domain/producer/Producer'
import { ProducerCnpjCpf } from '../domain/producer/ProducerCnpjCpf'
import { ProducerName } from '../domain/producer/ProducerName'
import { InvalidCnpjOrCpfError } from '../domain/producer/error/InvalidCnpjOrCpfError'
import { InvalidNameError } from '../domain/producer/error/InvalidNameError'
import { type ProducerDTO } from '../dtos/ProducerDTO'

export class ProducerMap {
  public static toDTO(producer: Producer): ProducerDTO {
    return {
      id: producer.id,
      name: producer.name.value,
      cnpjCpf: producer.cnpjCpf.value,
    }
  }

  public static toDomain(raw: any): Producer | null {
    const producerNameOrError = ProducerName.create({ value: raw.name })
    const producerCnpjCpfOrError = ProducerCnpjCpf.create({ value: raw.cpfCnpj })

    if (producerNameOrError.isLeft()) throw new InvalidNameError()
    if (producerCnpjCpfOrError.isLeft()) throw new InvalidCnpjOrCpfError()

    const producerOrError = Producer.create(
      {
        name: producerNameOrError.value,
        cnpjCpf: producerCnpjCpfOrError.value,
      },
      raw.id,
    )

    return producerOrError.isRight() ? producerOrError.value : null
  }

  public static async toPersistence(producer: Producer): Promise<any> {
    return {
      id: producer.id,
      name: producer.name.value,
      cpfCnpj: producer.cnpjCpf.value,
    }
  }
}
