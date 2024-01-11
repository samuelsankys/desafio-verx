export class ServerError extends Error {
  constructor(error?: Error, message = 'Server failed. Try again soon') {
    super(message)
    this.name = 'ServerError'
    this.stack = error?.stack
  }
}

export class ValidationError extends Error {
  constructor(field: string, message: string) {
    super(field + message)
    this.name = 'ValidationError'
  }
}

export class RequiredFieldError extends Error {
  constructor(fieldName: string) {
    super(`The field ${fieldName} is required`)
    this.name = 'RequiredFieldError'
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Access denied') {
    super(message)
    this.name = 'ForbiddenError'
  }
}

export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message)
    this.name = 'NotFoundError'
  }
}
export class ClientError extends Error {
  constructor(message = 'Client Error') {
    super(message)
    this.name = 'ClientError'
  }
}

export class ConflictError extends Error {
  constructor(message = 'conflict') {
    super(message)
    this.name = 'ConflictError'
  }
}

export class UnprocessableEntityError extends Error {
  constructor(message = 'unprocessable') {
    super(message)
    this.name = 'UnprocessableEntityError'
  }
}
