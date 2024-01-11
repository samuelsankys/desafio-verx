import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type CreateProducerUseCase } from './CreateProducerUsecase'
import { badRequest, clientError, conflict, type HttpResponse, serverError, created } from '@/shared/application/helpers/Http'
import { CreateProducerErrors } from './CreateProducerErrors'
import { type CreateProducerRequestDTO } from './CreateProducerValidator'
export class CreateProducerController implements Controller {
  constructor(
    private readonly validator: Validator<CreateProducerRequestDTO>,
    private readonly useCase: CreateProducerUseCase,
  ) {}

  async handle(httpRequest: CreateProducerRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case CreateProducerErrors.ProducerAlreadyExistsError:
            return conflict(error.message)
          default:
            return clientError(error.message)
        }
      } else {
        return created(result.value)
      }
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
