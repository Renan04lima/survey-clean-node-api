import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express/express-middleware-adapter'
import { adapterRouter } from '../adapters/express/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-surveys-controller'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  const auth = adaptMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth, adapterRouter(makeAddSurveyController()))
  router.get('/surveys', auth, adapterRouter(makeLoadSurveysController()))
}
