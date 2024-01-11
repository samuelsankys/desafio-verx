import { PrismaFarmRepo } from '@/modules/repositories/prisma/PgFarmRepository'
import { DeleteFarmController } from '@/modules/useCases/farm/deleteFarm/DeleteFarmController'
import { DeleteFarmUseCase } from '@/modules/useCases/farm/deleteFarm/DeleteFarmUsecase'
import { DeleteFarmValidator } from '@/modules/useCases/farm/deleteFarm/DeleteFarmValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeDeleteFarmController(): Controller {
  const prismaFarmRepo = new PrismaFarmRepo()
  const deleteFarm = new DeleteFarmUseCase(prismaFarmRepo)
  const validator = new DeleteFarmValidator()
  const deleteFarmController = new DeleteFarmController(validator, deleteFarm)

  return deleteFarmController
}
