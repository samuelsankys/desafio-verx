import { type Controller } from '@/shared/core/Controller'
import { type DashboardFarmUseCase } from './DashboardFarmUsecase'
import { clientError, type HttpResponse, serverError, notFound, ok } from '@/shared/application/helpers/Http'
import { DashboardFarmErrors } from './DashboardFarmErrors'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DashboardFarmRequestDTO {}
export class DashboardFarmController implements Controller {
  constructor(private readonly useCase: DashboardFarmUseCase) {}

  async handle(httpRequest: DashboardFarmRequestDTO): Promise<HttpResponse> {
    try {
      const result = await this.useCase.perform(httpRequest)
      if (result.isLeft()) {
        const error: any = result.value
        switch (error.constructor) {
          case DashboardFarmErrors.FarmNotExistsError:
            return notFound(error.message)
          default:
            return clientError(error.message)
        }
      } else {
        return ok(result.value)
      }
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
