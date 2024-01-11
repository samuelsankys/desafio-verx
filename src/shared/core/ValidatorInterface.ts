import { type Either } from './Either'

export interface Validator<T = any> {
  validate: (data: T) => Either<Error, T>
}
