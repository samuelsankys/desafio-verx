import { type ZodSchema, type ZodError } from 'zod'
import { type Validator } from './ValidatorInterface'
import { type Either, left, right } from './Either'
import { ValidationError } from '../application/helpers/HttpErrors'

interface ErrorData {
  message: string
  field: string
}

export abstract class AbstractValidator<T> implements Validator<T> {
  constructor(private readonly schema: ZodSchema<T>) {}

  validate(data: T): Either<ValidationError, T> {
    const validationResult = this.schema.safeParse(data)

    if (!validationResult.success) {
      let { message, field } = this.messageError(validationResult.error)
      field = field !== undefined ? field + ' ' : ''
      return left(new ValidationError(field, message))
    }
    return right(validationResult?.data)
  }

  protected messageError(error: ZodError): ErrorData {
    const arrayError = JSON.parse(error.message)

    const message = arrayError[0].message
    const field = arrayError[0].path[0]
    return { message, field }
  }
}
