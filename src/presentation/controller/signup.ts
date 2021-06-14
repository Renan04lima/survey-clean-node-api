import { MissingParamError } from '../errors'
import { badRequest } from '../helpers'
import { HttpResponse } from '../protocols'

export default class SignUpController {
  handle (httpRequest: any): HttpResponse {
    return badRequest(new MissingParamError('name'))
  }
};
