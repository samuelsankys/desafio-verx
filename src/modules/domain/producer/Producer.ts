import { type ProducerName } from './ProducerName'
import { type ProducerCnpjCpf } from './ProducerCnpjCpf'
import { Entity } from '@/shared/core/domain/Entity'
import { type InvalidNameError } from './error/InvalidNameError'
import { type InvalidCnpjOrCpfError } from './error/InvalidCnpjOrCpfError'
import { right, type Either } from '@/shared/core/Either'

interface IProducerProps {
  name: ProducerName
  cnpjCpf: ProducerCnpjCpf
}

export class Producer extends Entity<IProducerProps> {
  get name() {
    return this.props.name
  }

  get cnpjCpf() {
    return this.props.cnpjCpf
  }

  private constructor(props: IProducerProps, id?: string) {
    super(props, id)
  }

  static create(props: IProducerProps, id?: string): Either<InvalidNameError | InvalidCnpjOrCpfError, Producer> {
    const producer = new Producer(props, id)

    return right(producer)
  }
}
