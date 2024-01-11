import { left, type Either, right } from '@/shared/core/Either'
import { ValueObject } from '@/shared/core/domain/ValueObject'
import { InvalidNameError } from './error/InvalidNameError'

export interface ProducerNameProps {
  value: string
}

export class ProducerName extends ValueObject<ProducerNameProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: ProducerNameProps) {
    super(props)
  }

  static validate(name: string): boolean {
    if (typeof name !== 'string') return false
    if (!name || name.trim().length < 2 || name.trim().length > 255) {
      return false
    }

    return true
  }

  static create(props: ProducerNameProps): Either<InvalidNameError, ProducerName> {
    if (!this.validate(props.value)) {
      return left(new InvalidNameError())
    }
    return right(new ProducerName({ value: props.value }))
  }
}
