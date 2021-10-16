import { SaveSurveyResultRepository, LoadSurveyResultRepository } from '@/data/protocols'
import { SaveSurveyResult } from '@/domain/usecases'
import { mockSurveyResultModel } from '@/../tests/domain/mocks'

export class SaveSurveyResultRepositorySpy implements SaveSurveyResultRepository {
  saveSurveyResultParams: SaveSurveyResult.Params

  async save (data: SaveSurveyResult.Params): Promise<void> {
    this.saveSurveyResultParams = data
  }
}

export class LoadSurveyResultRepositorySpy implements LoadSurveyResultRepository {
  surveyId: string
  accountId: string
  result = mockSurveyResultModel()

  async loadBySurveyId (surveyId: string, accountId: string): Promise<LoadSurveyResultRepository.Result> {
    this.surveyId = surveyId
    this.accountId = accountId
    return this.result
  }
}
