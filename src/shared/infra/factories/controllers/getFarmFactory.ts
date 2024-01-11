import { PrismaFarmRepo } from '@/modules/repositories/prisma/PgFarmRepository'
import { GetFarmController } from '@/modules/useCases/farm/getFarm/GetFarmController'
import { GetFarmUseCase } from '@/modules/useCases/farm/getFarm/GetFarmUsecase'
import { GetFarmValidator } from '@/modules/useCases/farm/getFarm/GetFarmValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeGetFarmController(): Controller {
  const prismaFarmRepo = new PrismaFarmRepo()
  const getFarm = new GetFarmUseCase(prismaFarmRepo)
  const validator = new GetFarmValidator()
  const getFarmController = new GetFarmController(validator, getFarm)

  return getFarmController
}
