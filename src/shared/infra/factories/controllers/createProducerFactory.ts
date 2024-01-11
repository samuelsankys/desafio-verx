import { PrismaProducerRepo } from '@/modules/repositories/prisma/PgProducerRepository'
import { CreateProducerController } from '@/modules/useCases/producer/createProducer/CreateProducerController'
import { CreateProducerUseCase } from '@/modules/useCases/producer/createProducer/CreateProducerUsecase'
import { CreateProducerValidator } from '@/modules/useCases/producer/createProducer/CreateProducerValidator'
import { type Controller } from '@/shared/core/Controller'

export function makeCreateProducerController(): Controller {
  const prismaProcducerRepo = new PrismaProducerRepo()
  const createProducer = new CreateProducerUseCase(prismaProcducerRepo)
  const validator = new CreateProducerValidator()
  const createProducerController = new CreateProducerController(validator, createProducer)

  return createProducerController
}
