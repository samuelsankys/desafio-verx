import { type Producer } from '@/modules/domain/producer/Producer'

type Result = null | Producer

export interface IProducerRepository {
  exists: (cpfCnpj: string) => Promise<Result>
  getById: (id: string) => Promise<Result>
  save: (producer: Producer) => Promise<Result>
  create: (producer: Producer) => Promise<Result>
  delete: (id: string) => Promise<boolean>
}
