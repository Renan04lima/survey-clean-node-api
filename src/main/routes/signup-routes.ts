import { Router } from 'express'
import { adapterRouter } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/signup/signup-factory'

export default (router: Router): void => {
  router.post('/signup', adapterRouter(makeSignUpController()))
}
