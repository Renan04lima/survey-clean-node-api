import { MissingParamError } from '../errors'
import SignUpController from './signup'
// sut: system under test
function makeSut (): SignUpController {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
