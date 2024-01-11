import {
  ClientError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ServerError,
  UnauthorizedError,
  UnprocessableEntityError,
  type ValidationError,
} from '@/shared/application/helpers/HttpErrors'

export interface HttpResponse<T = any> {
  statusCode: number
  data: T
}

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data,
})

export const created = <T = any>(data: T): HttpResponse => ({
  statusCode: 201,
  data,
})

export const okNoContent = (): HttpResponse => ({
  statusCode: 204,
  data: undefined,
})

export const badRequest = (error: ValidationError): HttpResponse<Error> => ({
  statusCode: 400,
  data: error,
})

export const clientError = (message: string): HttpResponse<Error> => ({
  statusCode: 400,
  data: new ClientError(message),
})

export const unauthorized = (): HttpResponse<Error> => ({
  statusCode: 401,
  data: new UnauthorizedError(),
})

export const forbidden = (message?: string): HttpResponse<Error> => ({
  statusCode: 403,
  data: new ForbiddenError(message),
})

export const notFound = (message: string): HttpResponse<Error> => ({
  statusCode: 404,
  data: new NotFoundError(message),
})

export const conflict = (message: string): HttpResponse<Error> => ({
  statusCode: 409,
  data: new ConflictError(message),
})

export const unProcessable = (message: string): HttpResponse<Error> => ({
  statusCode: 422,
  data: new UnprocessableEntityError(message),
})

export const serverError = (error?: Error, message?: string): HttpResponse<Error> => {
  console.log(error)
  return { statusCode: 500, data: new ServerError(error, message) }
}
