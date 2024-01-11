import { type FarmName } from './FarmName'
import { Entity } from '@/shared/core/domain/Entity'
import { type InvalidNameError } from './error/InvalidNameError'
import { right, type Either, left } from '@/shared/core/Either'
import { InvalidAreaError } from './error/InvalidAreaError'

type PlantedCulture = 'SOY' | 'CORN' | 'COTTON' | 'COFFEE' | 'SUGAR_CANE'

interface IFarmProps {
  name: FarmName
  city: string
  state: string
  totalAreaHec: number
  agricuturalAreaHec: number
  vegetationAreaHec: number
  plantedCulture: PlantedCulture[]
}

export class Farm extends Entity<IFarmProps> {
  get name() {
    return this.props.name
  }

  get city() {
    return this.props.city
  }

  get state() {
    return this.props.state
  }

  get totalAreaHec() {
    return this.props.totalAreaHec
  }

  get agricuturalAreaHec() {
    return this.props.agricuturalAreaHec
  }

  get vegetationAreaHec() {
    return this.props.vegetationAreaHec
  }

  get plantedCulture() {
    return this.props.plantedCulture
  }

  private constructor(props: IFarmProps, id?: string) {
    super(props, id)
  }

  static create(props: IFarmProps, id?: string): Either<InvalidNameError, Farm> {
    const farm = new Farm(props, id)
    console.log(props.agricuturalAreaHec)
    console.log(props.vegetationAreaHec)

    console.log(props.totalAreaHec)
    if (Number(props.agricuturalAreaHec) + Number(props.vegetationAreaHec) > Number(props.totalAreaHec)) {
      return left(new InvalidAreaError())
    }
    return right(farm)
  }
}
