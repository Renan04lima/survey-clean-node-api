import { AddSurvey } from '@/domain/usecases/add-survey'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
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

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
