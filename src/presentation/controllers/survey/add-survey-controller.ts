import { AddSurvey } from '@/domain/usecases/add-survey'
import { badRequest, serverError } from '@/presentation/helpers'
import { Controller, Validation, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddSurveyController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle({ body }: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      await this.addSurvey.add({ ...body })
      return new Promise(resolve => resolve(null))
    } catch (error) {
      return serverError(error)
    }
  }
}
