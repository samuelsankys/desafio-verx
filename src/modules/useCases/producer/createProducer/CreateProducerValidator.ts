import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const CreateProducerSchema = z
  .object({
    name: z.string().min(2).max(255).nonempty(),
    cpfCnpj: z.string().min(14).max(18).nonempty(),
  })
  .strict()

export type CreateProducerRequestDTO = z.infer<typeof CreateProducerSchema>

export class CreateProducerValidator extends AbstractValidator<CreateProducerRequestDTO> {
  constructor() {
    super(CreateProducerSchema)
  }
}
