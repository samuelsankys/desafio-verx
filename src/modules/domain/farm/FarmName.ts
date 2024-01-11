import { left, type Either, right } from '@/shared/core/Either'
import { ValueObject } from '@/shared/core/domain/ValueObject'
import { InvalidNameError } from './error/InvalidNameError'

export interface FarmNameProps {
  value: string
}

export class FarmName extends ValueObject<FarmNameProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: FarmNameProps) {
    super(props)
  }

  static validate(name: string): boolean {
    if (typeof name !== 'string') return false
    if (!name || name.trim().length < 2 || name.trim().length > 255) {
      return false
    }

    return true
  }

  static create(props: FarmNameProps): Either<InvalidNameError, FarmName> {
    if (!this.validate(props.value)) {
      return left(new InvalidNameError())
    }
    return right(new FarmName({ value: props.value }))
  }
}
