import { AddAccount } from '@/domain/usecases/add-account'
import { InvalidParamError, MissingParamError } from '../errors'
import { badRequest, serverError } from '../helpers'
import { HttpRequest, HttpResponse } from '../protocols'
import { EmailValidator } from '../protocols/email-validator'

export default class SignUpController {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const { name, password, email } = httpRequest.body
      if (!name) { return badRequest(new MissingParamError('name')) }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) { return badRequest(new InvalidParamError('email')) }

      this.addAccount.add({
        name,
        email,
        password
      })
    } catch (error) {
      return serverError(error)
    }
  }
};
