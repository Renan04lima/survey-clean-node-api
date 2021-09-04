import { Validation } from '@/presentation/protocols/validation'
import { badRequest, ok, serverError } from '../../helpers'
import { Controller, HttpRequest, HttpResponse, AddAccount } from './signup-controller-protocols'

export default class SignUpController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation) {
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, password, email } = httpRequest.body

      const account = await this.addAccount.add({
        name,
        email,
        password
      })

      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
};