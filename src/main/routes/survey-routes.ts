import { Router } from 'express'
import { adapterRouter } from '../adapters/express/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'

export default (router: Router): void => {
  router.post('/surveys', adapterRouter(makeAddSurveyController()))
}
