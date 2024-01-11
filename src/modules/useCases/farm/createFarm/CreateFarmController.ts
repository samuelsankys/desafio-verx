import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type CreateFarmUseCase } from './CreateFarmUsecase'
import { badRequest, clientError, type HttpResponse, serverError, created, notFound } from '@/shared/application/helpers/Http'
import { CreateFarmErrors } from './CreateFarmErrors'
import { type CreateFarmRequestDTO } from './CreateFarmValidator'

export class CreateFarmController implements Controller {
  constructor(
    private readonly validator: Validator<CreateFarmRequestDTO>,
    private readonly useCase: CreateFarmUseCase,
  ) {}

  async handle(httpRequest: CreateFarmRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case CreateFarmErrors.ProducerNotExistsError:
            return notFound(error.message)
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
