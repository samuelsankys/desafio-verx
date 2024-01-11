import { Router } from 'express'
import { adaptRoute } from '@/shared/infra/adapters/ExpressRouteAdapter'
import { makeCreateProducerController } from '@/shared/infra/factories/controllers/createProducerFactory'
import { makeDeleteProducerController } from '@/shared/infra/factories/controllers/deleteProducerFactory'
import { makeUpdateProducerController } from '@/shared/infra/factories/controllers/updateProducerFactory'
import { makeGetProducerController } from '@/shared/infra/factories/controllers/getProducerFactory'

const router = Router()

router.get('/:producerId', adaptRoute(makeGetProducerController()))
router.post('/', adaptRoute(makeCreateProducerController()))
router.put('/:producerId', adaptRoute(makeUpdateProducerController()))
router.delete('/:producerId', adaptRoute(makeDeleteProducerController()))

export default router
