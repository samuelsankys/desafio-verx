import { prisma } from '@/shared/infra/database/prisma/config'
import { type IFarmRepository } from '../IFarmRepository'
import { type Farm } from '@/modules/domain/farm/Farm'
import { FarmMap } from '@/modules/mappers/FarmMapper'

type Result = null | Farm

export class PrismaFarmRepo implements IFarmRepository {
  async getById(id: string): Promise<Result> {
    const farm = await prisma.farm.findUnique({ where: { id } })
    console.log(farm)

    return farm !== null ? FarmMap.toDomain(farm) : null
  }

  async dashboard(): Promise<any> {
    const countFarm = await prisma.farm.count()
    const totalAreaResponse = await prisma.farm.aggregate({
      _sum: {
        totalAreaHec: true,
      },
    })
    const totalArea = totalAreaResponse._sum?.totalAreaHec ? +totalAreaResponse._sum.totalAreaHec : 0
    const pizzaStateResponse = await prisma.farm.groupBy({
      by: ['state'],
      _count: true,
    })
    let percentByState
    if (countFarm > 0) {
      percentByState = pizzaStateResponse.map((item) => {
        return {
          state: item.state,
          percent: (item._count * 100) / countFarm,
        }
      })
    }
    const plantedCultureCounts = await prisma.farm.findMany({
      select: {
        plantedCulture: true,
      },
    })
    const allCultures = plantedCultureCounts.flatMap((farm) => farm.plantedCulture)
    const countsCultures: any = {}

    allCultures.forEach((element) => {
      countsCultures[element] = (countsCultures[element] || 0) + 1
    })

    const percentCulturas: any = []
    for (const key in countsCultures) {
      if (Object.prototype.hasOwnProperty.call(countsCultures, key)) {
        const cultaValues: any = {}
        cultaValues.cultura = key
        cultaValues.percent = Math.round(countsCultures[key] * 100) / allCultures.length
        percentCulturas.push(cultaValues)
      }
    }
    const totalAreaUseResponse = await prisma.farm.aggregate({
      _sum: {
        agricuturalAreaHec: true,
        vegetationAreaHec: true,
      },
    })
    const totalAgricultural = totalAreaUseResponse._sum?.agricuturalAreaHec ? +totalAreaUseResponse._sum.agricuturalAreaHec : 0
    const totalVegetation = totalAreaUseResponse._sum?.vegetationAreaHec ? +totalAreaUseResponse._sum.vegetationAreaHec : 0
    const totalUse = totalAgricultural + totalVegetation
    let percentTotalAreaUse = {
      agriculturalAreaHec: 0,
      vegetationAreaHec: 0,
    }
    if (totalUse > 0) {
      percentTotalAreaUse = {
        agriculturalAreaHec: Math.round(totalAgricultural * 100) / (totalAgricultural + totalVegetation),
        vegetationAreaHec: Math.round(totalVegetation * 100) / (totalAgricultural + totalVegetation),
      }
    }

    return { totalFarm: countFarm, totalArea, percentByState, percentCulturas, percentTotalAreaUse }
  }

  async save(farm: Farm): Promise<Result> {
    const rawPrismaFarm = await FarmMap.toPersistence(farm)
    const result = await prisma.farm.update({
      where: {
        id: rawPrismaFarm.id,
      },
      data: rawPrismaFarm,
    })
    return result ? FarmMap.toDomain(result) : null
  }

  async create(farm: Farm, producerId: string): Promise<Result> {
    const rawPrismaFarm = await FarmMap.toPersistence(farm)
    const newFarm = await prisma.farm.create({ data: rawPrismaFarm })
    await prisma.farm.update({
      where: {
        id: newFarm.id,
      },
      data: {
        Producers: {
          connect: {
            id: producerId,
          },
        },
      },
    })
    return newFarm ? FarmMap.toDomain(newFarm) : null
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.farm.delete({
      where: {
        id,
      },
    })
    return !!result
  }
}
