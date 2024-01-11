import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const UpdateFarmSchema = z
  .object({
    farmId: z.string().uuid().nonempty(),
    name: z.string().min(2).max(255).nonempty(),
    city: z.string().min(2).max(20).nonempty(),
    state: z.string().min(2).max(50).nonempty(),
    totalAreaHec: z.number().min(0),
    agricuturalAreaHec: z.number().min(0),
    vegetationAreaHec: z.number().min(0),
    plantedCulture: z.array(z.enum(['SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE'])),
  })
  .strict()

export type UpdateFarmRequestDTO = z.infer<typeof UpdateFarmSchema>

export class UpdateFarmValidator extends AbstractValidator<UpdateFarmRequestDTO> {
  constructor() {
    super(UpdateFarmSchema)
  }
}
