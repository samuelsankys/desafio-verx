import { PrismaProducerRepo } from '@/modules/repositories/prisma/PgProducerRepository'
import { GetProducerController } from '@/modules/useCases/producer/getProducer/GetProducerController'
import { GetProducerUseCase } from '@/modules/useCases/producer/getProducer/GetProducerUsecase'
import { GetProducerValidator } from '@/modules/useCases/producer/getProducer/GetProducerValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeGetProducerController(): Controller {
  const prismaProcducerRepo = new PrismaProducerRepo()
  const getProducer = new GetProducerUseCase(prismaProcducerRepo)
  const validator = new GetProducerValidator()
  const getProducerController = new GetProducerController(validator, getProducer)

  return getProducerController
}
