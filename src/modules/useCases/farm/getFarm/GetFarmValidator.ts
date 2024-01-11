import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const GetFarmSchema = z
  .object({
    farmId: z.string().uuid().nonempty(),
  })
  .strict()

export type GetFarmRequestDTO = z.infer<typeof GetFarmSchema>

export class GetFarmValidator extends AbstractValidator<GetFarmRequestDTO> {
  constructor() {
    super(GetFarmSchema)
  }
}
