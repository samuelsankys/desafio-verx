import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { badRequest, clientError, okNoContent, type HttpResponse, serverError, notFound } from '@/shared/application/helpers/Http'
import { type DeleteFarmRequestDTO } from './DeleteFarmValidator'
import { type DeleteFarmUseCase } from './DeleteFarmUsecase'
import { DeleteFarmErrors } from './DeleteFarmErrors'

export class DeleteFarmController implements Controller {
  constructor(
    private readonly validator: Validator<DeleteFarmRequestDTO>,
    private readonly useCase: DeleteFarmUseCase,
  ) {}

  async handle(httpRequest: DeleteFarmRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case DeleteFarmErrors.FarmNotExistsError:
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
