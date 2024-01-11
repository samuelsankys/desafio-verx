import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const GetProducerSchema = z
  .object({
    producerId: z.string().uuid().nonempty(),
  })
  .strict()

export type GetProducerRequestDTO = z.infer<typeof GetProducerSchema>

export class GetProducerValidator extends AbstractValidator<GetProducerRequestDTO> {
  constructor() {
    super(GetProducerSchema)
  }
}
