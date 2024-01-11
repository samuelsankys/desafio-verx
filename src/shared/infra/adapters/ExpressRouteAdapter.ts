import { type HttpResponse } from '@/shared/application/helpers/Http'
import { type Controller } from '@/shared/core/Controller'
import { type Request, type Response } from 'express'
import { type HttpRequest } from '../ports/HttpRequest'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      ...request.body,
      ...request.params,
      ...request.query,
    }

    const httpResponse: HttpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json(httpResponse.data)
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.data.name,
        message: httpResponse.data.message,
      })
    }
  }
}
