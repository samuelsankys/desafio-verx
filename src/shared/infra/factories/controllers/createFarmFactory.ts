import { PrismaFarmRepo } from '@/modules/repositories/prisma/PgFarmRepository'
import { PrismaProducerRepo } from '@/modules/repositories/prisma/PgProducerRepository'
import { CreateFarmController } from '@/modules/useCases/farm/createFarm/CreateFarmController'
import { CreateFarmUseCase } from '@/modules/useCases/farm/createFarm/CreateFarmUsecase'
import { CreateFarmValidator } from '@/modules/useCases/farm/createFarm/CreateFarmValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeCreateFarmController(): Controller {
  const prismaProcducerRepo = new PrismaProducerRepo()
  const prismaFarmRepo = new PrismaFarmRepo()
  const createFarm = new CreateFarmUseCase(prismaFarmRepo, prismaProcducerRepo)
  const validator = new CreateFarmValidator()
  const createFarmController = new CreateFarmController(validator, createFarm)

  return createFarmController
}
