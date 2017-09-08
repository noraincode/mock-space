import {Router} from 'express'

const router = Router()

router.get('/route-test2', (req, res, next) => {
  res.end('Hello route test2!')
})

export {router}
