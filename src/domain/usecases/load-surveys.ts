import { SurveyModel } from '../model/survey'

export interface LoadSurveys {
  load: () => Promise<SurveyModel[]>
}
