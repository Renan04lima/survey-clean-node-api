import { Controller, Validation, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class AddSurveyController implements Controller {
  constructor(private readonly validation: Validation) {}

  async handle({ body }: HttpRequest): Promise<HttpResponse> {
    console.log(body)
    this.validation.validate(body)
    return undefined
  }
}
