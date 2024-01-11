import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type UpdateFarmUseCase } from './UpdateFarmUsecase'
import { badRequest, clientError, type HttpResponse, serverError, notFound, okNoContent } from '@/shared/application/helpers/Http'
import { UpdateFarmErrors } from './UpdateFarmErrors'
import { type UpdateFarmRequestDTO } from './UpdateFarmValidator'

export class UpdateFarmController implements Controller {
  constructor(
    private readonly validator: Validator<UpdateFarmRequestDTO>,
    private readonly useCase: UpdateFarmUseCase,
  ) {}

  async handle(httpRequest: UpdateFarmRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case UpdateFarmErrors.FarmNotExistsError:
            return notFound(error.message)
          default:
            return clientError(error.message)
        }
      } else {
        return okNoContent()
      }
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
