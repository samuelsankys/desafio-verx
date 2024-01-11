import { AbstractValidator } from '@/shared/core/AbstractValidator'
import { z } from 'zod'

const DeleteFarmSchema: any = z
  .object({
    farmId: z.string().uuid().nonempty(),
  })
  .strict()

export type DeleteFarmRequestDTO = z.infer<typeof DeleteFarmSchema>

export class DeleteFarmValidator extends AbstractValidator<DeleteFarmRequestDTO> {
  constructor() {
    super(DeleteFarmSchema)
  }
}
