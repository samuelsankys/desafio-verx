import { type Controller } from '@/shared/core/Controller'
import { type Validator } from '@/shared/core/ValidatorInterface'
import { type GetProducerUseCase } from './GetProducerUsecase'
import { badRequest, clientError, type HttpResponse, serverError, notFound, ok } from '@/shared/application/helpers/Http'
import { GetProducerErrors } from './GetProducerErrors'
import { type GetProducerRequestDTO } from './GetProducerValidator'
export class GetProducerController implements Controller {
  constructor(
    private readonly validator: Validator<GetProducerRequestDTO>,
    private readonly useCase: GetProducerUseCase,
  ) {}

  async handle(httpRequest: GetProducerRequestDTO): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(httpRequest)
      if (validationResult.isLeft()) return badRequest(validationResult.value)

      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case GetProducerErrors.ProducerNotExistsError:
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
