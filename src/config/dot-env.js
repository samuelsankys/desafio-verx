require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
})

module.exports = {}