export interface UseCase<IRequest, IResponse> {
  perform: (request: IRequest) => Promise<IResponse> | IResponse
}
