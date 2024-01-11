import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const DeleteProducerSchema = z
  .object({
    producerId: z.string().uuid().nonempty(),
  })
  .strict()

export type DeleteProducerRequestDTO = z.infer<typeof DeleteProducerSchema>

export class DeleteProducerValidator extends AbstractValidator<DeleteProducerRequestDTO> {
  constructor() {
    super(DeleteProducerSchema)
  }
}
