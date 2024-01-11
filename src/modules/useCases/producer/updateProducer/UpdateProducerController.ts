import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type UpdateProducerUseCase } from './UpdateProducerUsecase'
import { badRequest, clientError, okNoContent, type HttpResponse, serverError, notFound } from '@/shared/application/helpers/Http'
import { UpdateProducerErrors } from './UpdateProducerErrors'
import { type UpdateProducerRequestDTO } from './UpdateProducerValidator'

export class UpdateProducerController implements Controller {
  constructor(
    private readonly validator: Validator<UpdateProducerRequestDTO>,
    private readonly useCase: UpdateProducerUseCase,
  ) {}

  async handle(httpRequest: UpdateProducerRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case UpdateProducerErrors.ProducerNotExistsError:
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
