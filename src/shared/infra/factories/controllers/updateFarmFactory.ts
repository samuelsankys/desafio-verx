import { PrismaFarmRepo } from '@/modules/repositories/prisma/PgFarmRepository'
import { UpdateFarmController } from '@/modules/useCases/farm/updateFarm/UpdateFarmController'
import { UpdateFarmUseCase } from '@/modules/useCases/farm/updateFarm/UpdateFarmUsecase'
import { UpdateFarmValidator } from '@/modules/useCases/farm/updateFarm/UpdateFarmValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeUpdateFarmController(): Controller {
  const prismaFarmRepo = new PrismaFarmRepo()
  const updateFarm = new UpdateFarmUseCase(prismaFarmRepo)
  const validator = new UpdateFarmValidator()
  const updateFarmController = new UpdateFarmController(validator, updateFarm)

  return updateFarmController
}
