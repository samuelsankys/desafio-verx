import { Farm } from '../domain/farm/Farm'
import { FarmName } from '../domain/farm/FarmName'
import { InvalidNameError } from '../domain/producer/error/InvalidNameError'
import { type FarmDTO } from '../dtos/FarmDTO'

export class FarmMap {
  public static toDTO(farm: Farm): FarmDTO {
    return {
      id: farm.id,
      name: farm.name.value,
      city: farm.city,
      state: farm.state,
      totalAreaHec: +farm.totalAreaHec,
      agricuturalAreaHec: +farm.agricuturalAreaHec,
      vegetationAreaHec: +farm.vegetationAreaHec,
      plantedCulture: farm.plantedCulture,
    }
  }

  public static toDomain(raw: any): Farm | null {
    const farmNameOrError = FarmName.create({ value: raw.name })
    if (farmNameOrError.isLeft()) throw new InvalidNameError()
    const farmOrError = Farm.create(
      {
        name: farmNameOrError.value,
        city: raw.city,
        state: raw.state,
        totalAreaHec: raw.totalAreaHec,
        agricuturalAreaHec: raw.agricuturalAreaHec,
        plantedCulture: raw.plantedCulture,
        vegetationAreaHec: raw.vegetationAreaHec,
      },
      raw.id,
    )
    return farmOrError.isRight() ? farmOrError.value : null
  }

  public static async toPersistence(farm: Farm): Promise<any> {
    return {
      ...farm.props,
      id: farm.id,
      name: farm.name.value,
    }
  }
}
