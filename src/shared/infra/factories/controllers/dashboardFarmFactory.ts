import { PrismaFarmRepo } from '@/modules/repositories/prisma/PgFarmRepository'
import { DashboardFarmController } from '@/modules/useCases/farm/dashboardFarm/DashboardFarmController'
import { DashboardFarmUseCase } from '@/modules/useCases/farm/dashboardFarm/DashboardFarmUsecase'
import { type Controller } from '@/shared/core/Controller'

export function makeDashboardFarmController(): Controller {
  const prismaFarmRepo = new PrismaFarmRepo()
  const getFarm = new DashboardFarmUseCase(prismaFarmRepo)
  const getFarmController = new DashboardFarmController(getFarm)

  return getFarmController
}
