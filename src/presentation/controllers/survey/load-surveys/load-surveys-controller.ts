import { LoadSurveys } from '@/domain/usecases/load-surveys'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}
  async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurvey.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
