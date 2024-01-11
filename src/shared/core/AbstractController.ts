import { badRequest, serverError, type HttpResponse } from '../application/helpers/Http'
import { ValidationError } from '../application/helpers/HttpErrors'
import { type Controller } from './Controller'

export abstract class AbstractController<T> implements Controller {
  abstract perform(httpRequest: T): Promise<HttpResponse>

  async handle(httpRequest: T): Promise<HttpResponse> {
    try {
      const validateData = this.validate(httpRequest)
      if (validateData instanceof ValidationError) {
        return badRequest(validateData)
      }
      return await this.perform(validateData)
    } catch (error) {
      console.log('[BaseController]: Uncaught controller error')
      console.log(error)
      return serverError(error as Error)
    }
  }

  protected abstract validate(httpRequest: T): ValidationError | T
}
