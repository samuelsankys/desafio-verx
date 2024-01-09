import { config } from 'dotenv'
import { join } from 'path'

const envPathProduction = join(__dirname, '../..', '.env')
const envPathDevelopment = join(__dirname, '../..', '.env.development')

config({
  path: process.env.NODE_ENV === 'production' ? envPathProduction : envPathDevelopment,
})

export default {}
