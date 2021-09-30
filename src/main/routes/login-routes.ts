import { Router } from 'express'
import { adapterRouter } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/controllers/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adapterRouter(makeSignUpController()))
  router.post('/login', adapterRouter(makeLoginController()))
}
