import { badRequest } from '@/presentation/helpers'
import { Controller, Validation, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddSurveyController implements Controller {
  constructor(private readonly validation: Validation) {}

  async handle({ body }: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(body)
    if (error) {
      return badRequest(error)
    }
    return new Promise(resolve => resolve(null))
  }
}
