import { LoadSurveys } from '@/domain/usecases/load-surveys'
import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}
  async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurvey.load()
    return null
  }
}
