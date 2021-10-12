import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-by-survey-id-repository'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor(private readonly loadSurveyRepository: LoadSurveyResultRepository) {}
  async load(surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyRepository.loadBySurveyId(surveyId)
    return null
  }
}
