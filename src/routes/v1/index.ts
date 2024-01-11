import { Router } from 'express'
import producer from './producer.routes'

const router = Router()

router.use('/producer', producer)

export default router
