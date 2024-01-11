import { type HttpResponse } from '../application/helpers/Http'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
