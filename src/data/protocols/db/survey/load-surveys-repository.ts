import { SurveyModel } from '@/domain/model/survey'

export interface LoadSurveysRepository {
  loadAll: () => Promise<SurveyModel[]>
}
