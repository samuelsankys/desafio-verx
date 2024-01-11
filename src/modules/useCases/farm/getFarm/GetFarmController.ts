import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type GetFarmUseCase } from './GetFarmUsecase'
import { badRequest, clientError, type HttpResponse, serverError, notFound, ok } from '@/shared/application/helpers/Http'
import { type GetFarmRequestDTO } from './GetFarmValidator'
import { GetFarmErrors } from './GetFarmErrors'

export class GetFarmController implements Controller {
  constructor(
    private readonly validator: Validator<GetFarmRequestDTO>,
    private readonly useCase: GetFarmUseCase,
  ) {}

  async handle(httpRequest: GetFarmRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case GetFarmErrors.FarmNotExistsError:
            return notFound(error.message)
          default:
            return clientError(error.message)
        }
      } else {
        return ok(result.value)
      }
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
