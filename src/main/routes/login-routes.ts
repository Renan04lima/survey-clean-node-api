import { Router } from 'express'
import { adapterRouter } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/signup/signup-factory'
import { makeLoginController } from '../factories/login/login-factory'

export default (router: Router): void => {
  router.post('/signup', adapterRouter(makeSignUpController()))
  router.post('/login', adapterRouter(makeLoginController())) // BUG
}
