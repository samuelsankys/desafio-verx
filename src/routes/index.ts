import { type Application } from 'express'
import v1Routes from './v1'
import swaggerUi from 'swagger-ui-express'

import swaggerDocs from '../docs/index'

export default (app: Application): void => {
  app.get('/status', (req, res) => {
    res.send('All is fine...')
  })
  app.use('/api/v1', v1Routes)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
