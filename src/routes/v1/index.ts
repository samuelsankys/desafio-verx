import { Router } from 'express'
import producer from './producer.routes'
import farm from './farm.routes'

const router = Router()

router.use('/producer', producer)
router.use('/farm', farm)

export default router
