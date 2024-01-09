import { type Application } from 'express'
import v1Routes from './v1'

export default (app: Application): void => {
  app.get('/status', (req, res) => {
    res.send('All is fine...')
  })
  app.use('/api/v1', v1Routes)
}
