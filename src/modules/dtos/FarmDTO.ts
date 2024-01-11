export type PlantedCulture = 'SOY' | 'CORN' | 'COTTON' | 'COFFEE' | 'SUGAR_CANE'

export interface FarmDTO {
  id: string
  name: string
  city: string
  state: string
  totalAreaHec: number
  agricuturalAreaHec: number
  vegetationAreaHec: number
  plantedCulture: PlantedCulture[]
}
