import create from './create'
import update from './update'
import get from './get'
import remove from './remove'
export default {
  '/producer': {
    ...create,
  },
  '/producer/{producerId}': {
    ...update,
    ...get,
    ...remove,
  },
}
