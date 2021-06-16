import { InvalidParamError, MissingParamError } from '../errors'
import { badRequest } from '../helpers'
import { HttpRequest, HttpResponse } from '../protocols'
import { EmailValidator } from '../protocols/email-validator'

export default class SignUpController {
  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body
    if (!name) { return badRequest(new MissingParamError('name')) }
    const isValid = this.emailValidator.isValid(email)
    if (!isValid) { return badRequest(new InvalidParamError('email')) }
  }
};
