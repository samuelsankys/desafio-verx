import create from './create'
import dashboard from './dashboard'
import update from './update'
import get from './get'
import remove from './remove'
export default {
  '/farm': {
    ...create,
  },
  '/farm/{farmId}': {
    ...update,
    ...get,
    ...remove,
  },
  '/farm/dashboard': {
    ...dashboard,
  },
}
