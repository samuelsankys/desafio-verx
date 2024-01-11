import { PrismaProducerRepo } from '@/modules/repositories/prisma/PgProducerRepository'
import { UpdateProducerController } from '@/modules/useCases/producer/updateProducer/UpdateProducerController'
import { UpdateProducerUseCase } from '@/modules/useCases/producer/updateProducer/UpdateProducerUsecase'
import { UpdateProducerValidator } from '@/modules/useCases/producer/updateProducer/UpdateProducerValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeUpdateProducerController(): Controller {
  const prismaProcducerRepo = new PrismaProducerRepo()
  const updateProducer = new UpdateProducerUseCase(prismaProcducerRepo)
  const validator = new UpdateProducerValidator()
  const updateProducerController = new UpdateProducerController(validator, updateProducer)

  return updateProducerController
}
