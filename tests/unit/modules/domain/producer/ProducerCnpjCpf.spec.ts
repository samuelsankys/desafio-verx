import { ProducerCnpjCpf } from '@/modules/domain/producer/ProducerCnpjCpf'
import { InvalidCnpjOrCpfError } from '@/modules/domain/producer/error/InvalidCnpjOrCpfError'

describe('ProducerCnpjCpf - Object Value', () => {
  describe('create', () => {
    it('should return Right if CNPJ is valid', () => {
      const validCnpj = '58.687.332/0001-76'
      const sut = ProducerCnpjCpf.create({
        value: validCnpj,
      })

      expect(sut.isRight()).toBe(true)
      expect(sut.value).toBeInstanceOf(ProducerCnpjCpf)
    })

    it('should return Left if CNPJ is invalid', () => {
      const validCnpj = '58.687.332/0001-78'
      const sut = ProducerCnpjCpf.create({
        value: validCnpj,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return Left if CNPJ is valid but without signals', () => {
      const validCnpj = '58687332000176'
      const sut = ProducerCnpjCpf.create({
        value: validCnpj,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return Left if CNPJ with equals numbers', () => {
      const validCnpj = '11.111.111/1111-11'
      const sut = ProducerCnpjCpf.create({
        value: validCnpj,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return value CNPJ', () => {
      const validCnpj = '58.687.332/0001-76'
      const sut = ProducerCnpjCpf.create({
        value: validCnpj,
      })
      expect(sut.isRight()).toBe(true)
      if (sut.isRight()) {
        expect(sut.value.props.value).toBe(validCnpj)
      }
    })

    it('should return Right if CPF is invalid', () => {
      const validCpf = '673.051.230-05'
      const sut = ProducerCnpjCpf.create({
        value: validCpf,
      })

      expect(sut.isRight()).toBe(true)
      expect(sut.value).toBeInstanceOf(ProducerCnpjCpf)
    })

    it('should return Left if CPF is invalid', () => {
      const validCpf = '673.051.220-05'
      const sut = ProducerCnpjCpf.create({
        value: validCpf,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return Left if CPF is valid but without signals', () => {
      const validCpf = '67305123005'
      const sut = ProducerCnpjCpf.create({
        value: validCpf,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return Left if CPF with equals numbers', () => {
      const validCpf = '111.111.111-11'
      const sut = ProducerCnpjCpf.create({
        value: validCpf,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return Left if input null', () => {
      const validCpf = null
      const sut = ProducerCnpjCpf.create({
        value: validCpf as unknown as string,
      })

      expect(sut.isLeft()).toBe(true)
      expect(sut.value).toBeInstanceOf(InvalidCnpjOrCpfError)
    })

    it('should return value CPF', () => {
      const validCpf = '673.051.230-05'
      const sut = ProducerCnpjCpf.create({
        value: validCpf,
      })
      expect(sut.isRight()).toBe(true)
      if (sut.isRight()) {
        expect(sut.value.props.value).toBe(validCpf)
      }
    })
  })
})
