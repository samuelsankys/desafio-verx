import { type Farm } from '../domain/farm/Farm'

type Result = null | Farm

export interface IFarmRepository {
  getById: (id: string) => Promise<Result>
  dashboard: () => Promise<any>
  save: (farm: Farm) => Promise<Result>
  create: (farm: Farm, producerId: string) => Promise<Result>
  delete: (id: string) => Promise<boolean>
}
