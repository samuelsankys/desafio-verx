import { left, type Either, right } from '@/shared/core/Either'
import { ValueObject } from '@/shared/core/domain/ValueObject'
import { validateCNPJ, validateCPF } from '@/shared/application/utils/validatorCpfCnpj'
import { InvalidCnpjOrCpfError } from './error/InvalidCnpjOrCpfError'

export interface ProducerCnpjCpfProps {
  value: string
}

export class ProducerCnpjCpf extends ValueObject<ProducerCnpjCpfProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: ProducerCnpjCpfProps) {
    super(props)
  }

  private static isValidCnpj(cnpj: string): boolean {
    if (!cnpj || cnpj.length !== 18) return false
    if (!this.isValidFormatCnpj(cnpj)) return false
    return validateCNPJ(cnpj)
  }

  private static isValidFormatCnpj(cnpj: string): boolean {
    const re = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
    return re.test(cnpj)
  }

  private static isValidCpf(cpf: string): boolean {
    if (!cpf || cpf.length !== 14) return false
    if (!this.isValidFormatCpf(cpf)) return false
    return validateCPF(cpf)
  }

  private static isValidFormatCpf(cpf: string): boolean {
    const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return re.test(cpf)
  }

  public static create(props: ProducerCnpjCpfProps): Either<InvalidCnpjOrCpfError, ProducerCnpjCpf> {
    if (this.isValidCnpj(props.value) || this.isValidCpf(props.value)) {
      return right(new ProducerCnpjCpf({ value: props.value }))
    }
    return left(new InvalidCnpjOrCpfError())
  }
}
