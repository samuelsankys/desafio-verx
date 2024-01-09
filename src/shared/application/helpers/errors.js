class ServerError extends Error {
    constructor(error, message = 'Server failed. Try again soon') {
      super(message)
      this.name = 'ServerError'
      this.stack = error?.stack
    }
  }
  
  class ClientError extends Error {
    constructor(message = 'Client Error') {
      super(message)
      this.name = 'ClientError'
    }
  }
  
  module.exports = { ServerError, ClientError }