import { PrismaProducerRepo } from '@/modules/repositories/prisma/PgProducerRepository'
import { DeleteProducerController } from '@/modules/useCases/producer/deleteProducer/DeleteProducerController'
import { DeleteProducerUseCase } from '@/modules/useCases/producer/deleteProducer/DeleteProducerUsecase'
import { DeleteProducerValidator } from '@/modules/useCases/producer/deleteProducer/DeleteProducerValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeDeleteProducerController(): Controller {
  const prismaProcducerRepo = new PrismaProducerRepo()
  const updateProducer = new DeleteProducerUseCase(prismaProcducerRepo)
  const validator = new DeleteProducerValidator()
  const deleteProducerController = new DeleteProducerController(validator, updateProducer)

  return deleteProducerController
}
