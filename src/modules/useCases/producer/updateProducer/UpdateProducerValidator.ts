import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const UpdateProducerSchema = z
  .object({
    producerId: z.string().uuid().nonempty(),
    name: z.string().min(2).max(255).nonempty(),
    cpfCnpj: z.string().min(14).max(18).nonempty(),
  })
  .strict()

export type UpdateProducerRequestDTO = z.infer<typeof UpdateProducerSchema>

export class UpdateProducerValidator extends AbstractValidator<UpdateProducerRequestDTO> {
  constructor() {
    super(UpdateProducerSchema)
  }
}
