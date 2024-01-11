import serverError from './server.error'
import conflictError from './conflict.errors'
import notFoundError from './not-found.error'
import clientError from './client.error'
import forbiddenError from './forbidden.error'
import unauthorizedError from './unauthorized.error'

export default {
  errors: {
    ...serverError,
    ...notFoundError,
    ...conflictError,
    ...clientError,
    ...forbiddenError,
    ...unauthorizedError,
  },
}
