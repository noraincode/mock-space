import express from 'express'

import router from './routes/index.js'

// console.log(router)
// let router = Router()

// router.get('/', (req, res, next) => {
//   res.end('Hello route!')
// })

const app = express()

// app.use(router)

app.use('/', router)

app.listen(3000, function () {
  console.log(`WebServer is running at http://localhost:3000'`)
})
