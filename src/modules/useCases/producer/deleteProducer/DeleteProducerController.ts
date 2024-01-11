import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type DeleteProducerUseCase } from './DeleteProducerUsecase'
import { badRequest, clientError, okNoContent, type HttpResponse, serverError, notFound } from '@/shared/application/helpers/Http'
import { DeleteProducerErrors } from './DeleteProducerErrors'
import { type DeleteProducerRequestDTO } from './DeleteProducerValidator'

export class DeleteProducerController implements Controller {
  constructor(
    private readonly validator: Validator<DeleteProducerRequestDTO>,
    private readonly useCase: DeleteProducerUseCase,
  ) {}

  async handle(httpRequest: DeleteProducerRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case DeleteProducerErrors.ProducerNotExistsError:
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
