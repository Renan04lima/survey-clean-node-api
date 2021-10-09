import { LoadSurveys } from '@/domain/usecases/load-surveys'
import { ok } from '@/presentation/helpers'
import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'

export class LoadSurveysController implements Controller {
  constructor(private readonly loadSurvey: LoadSurveys) {}
  async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
    const surveys = await this.loadSurvey.load()
    return ok(surveys)
  }
}
