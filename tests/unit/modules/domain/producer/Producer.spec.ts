import { Producer } from '@/modules/domain/producer/Producer'
import { ProducerCnpjCpf } from '@/modules/domain/producer/ProducerCnpjCpf'
import { ProducerName } from '@/modules/domain/producer/ProducerName'
describe('Producer - Domain', () => {
  let validProducerName: ProducerName
  let validProducerCnpjCpf: ProducerCnpjCpf

  beforeAll(() => {
    const validName = 'Valid Producer'
    const validCnpjCpf = '24.133.441/0001-20'
    const producerName = ProducerName.create({ value: validName })
    const producerCnpjCpf = ProducerCnpjCpf.create({ value: validCnpjCpf })
    if (producerName.isRight()) validProducerName = producerName.value
    if (producerCnpjCpf.isRight()) validProducerCnpjCpf = producerCnpjCpf.value
  })
  describe('create', () => {
    it('should create a producer with valid name and CNPJ/CPF', () => {
      const sut = Producer.create({
        name: validProducerName,
        cnpjCpf: validProducerCnpjCpf,
      })
      expect(sut.isRight()).toBe(true)
      expect(sut.value).toBeInstanceOf(Producer)
    })

    it('should create a identifier automatically', () => {
      const sut = Producer.create({
        name: validProducerName,
        cnpjCpf: validProducerCnpjCpf,
      })
      expect(sut.isRight()).toBe(true)
      if (sut.isRight()) {
        expect(sut.value).toHaveProperty('id')
      }
    })
  })
})
