const app = require('./app')
const clc  = require( 'cli-color')
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(clc.yellow('App Brain Agriculture running at: '), clc.cyan(`http://localhost:${PORT}`))
  console.log(clc.yellow('Docs at: '), clc.cyan(`http://localhost:${PORT}/api-docs`))
})
