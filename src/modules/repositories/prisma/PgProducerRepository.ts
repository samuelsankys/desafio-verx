import { prisma } from '@/shared/infra/database/prisma/config'
import { type IProducerRepository } from '../IProducerRepository'
import { type Producer } from '@/modules/domain/producer/Producer'
import { ProducerMap } from '@/modules/mappers/ProducerMapper'

type Result = null | Producer

export class PrismaProducerRepo implements IProducerRepository {
  async exists(cpfCnpj: string): Promise<Result> {
    const producer = await prisma.producer.findUnique({ where: { cpfCnpj } })
    return producer !== null ? ProducerMap.toDomain(producer) : null
  }

  async getById(id: string): Promise<Result> {
    const producer = await prisma.producer.findUnique({ where: { id } })
    return producer !== null ? ProducerMap.toDomain(producer) : null
  }

  async save(producer: Producer): Promise<Result> {
    const rawPrismaProducer = await ProducerMap.toPersistence(producer)
    const result = await prisma.producer.update({
      where: {
        id: rawPrismaProducer.id,
      },
      data: rawPrismaProducer,
    })
    return result ? ProducerMap.toDomain(result) : null
  }

  async create(producer: Producer): Promise<Result> {
    const rawPrismaProducer = await ProducerMap.toPersistence(producer)
    const newProducer = await prisma.producer.create({ data: rawPrismaProducer })
    return newProducer ? ProducerMap.toDomain(newProducer) : null
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.producer.delete({
      where: {
        id,
      },
    })
    return !!result
  }
}
