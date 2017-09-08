import {Router} from 'express'

const router = Router()

router.get('/route-test1', (req, res, next) => {
  res.end('Hello route test1!')
})

export {router}
