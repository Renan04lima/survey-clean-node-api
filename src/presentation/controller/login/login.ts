import { MissingParamError } from '@/presentation/errors'
import { badRequest } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) { return new Promise(resolve => resolve(badRequest(new MissingParamError('email')))) }

    if (!httpRequest.body.password) { return new Promise(resolve => resolve(badRequest(new MissingParamError('password')))) }
  }
}
