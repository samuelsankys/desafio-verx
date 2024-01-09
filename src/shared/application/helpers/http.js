const { ServerError, ClientError } = require('./erros')

exports.ok = (res, data = null) => {
  return data ? res.status(200).json(data) : res.status(200)
}

exports.created = (res, data = null) => {
    return data ? res.status(201).json(data) : res.status(201)
  }

exports.okNoContent = (res) => {
  return res.status(204)
}

exports.badRequest = (res, error) => {
  const client = new ClientError(error.message)
  return res.status(400).json({ message: client.message })
}

exports.serverError = (res, error) => {
  const data = new ServerError(error, error.message)
  console.log(data.stack)
  return res.status(500).json({ message: data.message })
}