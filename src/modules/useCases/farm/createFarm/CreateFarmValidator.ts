import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const CreateFarmSchema = z
  .object({
    producerId: z.string().uuid().nonempty(),
    name: z.string().min(2).max(255).nonempty(),
    city: z.string().min(2).max(20).nonempty(),
    state: z.string().min(2).max(50).nonempty(),
    totalAreaHec: z.number().min(0),
    agricuturalAreaHec: z.number().min(0),
    vegetationAreaHec: z.number().min(0),
    plantedCulture: z.array(z.enum(['SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE'])),
  })

  .strict()

export type CreateFarmRequestDTO = z.infer<typeof CreateFarmSchema>

export class CreateFarmValidator extends AbstractValidator<CreateFarmRequestDTO> {
  constructor() {
    super(CreateFarmSchema)
  }
}
