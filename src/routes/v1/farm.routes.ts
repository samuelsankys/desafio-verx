import { Router } from 'express'
import { adaptRoute } from '@/shared/infra/adapters/ExpressRouteAdapter'
import { makeCreateFarmController } from '@/shared/infra/factories/controllers/createFarmFactory'
import { makeGetFarmController } from '@/shared/infra/factories/controllers/getFarmFactory'
import { makeUpdateFarmController } from '@/shared/infra/factories/controllers/updateFarmFactory'
import { makeDeleteFarmController } from '@/shared/infra/factories/controllers/deleteFarmFactory'
import { makeDashboardFarmController } from '@/shared/infra/factories/controllers/dashboardFarmFactory'

const router = Router()
router.get('/dashboard', adaptRoute(makeDashboardFarmController()))
router.get('/:farmId', adaptRoute(makeGetFarmController()))
router.post('/', adaptRoute(makeCreateFarmController()))
router.put('/:farmId', adaptRoute(makeUpdateFarmController()))
router.delete('/:farmId', adaptRoute(makeDeleteFarmController()))

export default router
