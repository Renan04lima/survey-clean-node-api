import { SaveSurveyResult } from '@/domain/usecases/survey-result/save-survey-result'
import { LoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'
import { Controller, HttpRequest,HttpResponse } from '@/presentation/protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(HttpRequest.params.surveyId)
    return null
  }
}
