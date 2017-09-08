import {Router} from 'express'
import path from 'path'
import fs from 'fs'

// function createRouter (versionDir) {
//   let routes = Router()
//   fs.readdirSync(versionDir).forEach(function (file) {
//     require(path.join(versionDir, file))(routes)
//   })
//   return routes
// }

function createRouter (versionDir) {
  let routes = []
  fs.readdirSync(path.join(__dirname, versionDir))
    .forEach(async (file) => {
      console.log(file)
      let route = await import(`./${versionDir}/${file}`)
      console.log(route)
      routes.push(route)
    })
  console.log('routes', routes)
  return routes
}

const router = Router()

const v1 = createRouter('v1')

console.log('v1', v1)

router.use('/', (req, res, next) => {
  res.end('Hello route!')
})
// router.use('/v1', v1)

export default router
