import { Encrypter } from './db-add-account-protocols'
import { DbAddAccount } from './db-add-account'

interface SutTypes {
  sut: DbAddAccount
  encryptStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
  class EncryptStub implements Encrypter {
    async encrypt(value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new EncryptStub()
}

const makeSut = (): SutTypes => {
  const encryptStub = makeEncrypter()
  const sut = new DbAddAccount(encryptStub)
  return {
    sut,
    encryptStub
  }
}

describe('DbAddAccount Usecase', () => {
  test('should call Encrypter with correct password', async () => {
    const { encryptStub, sut } = makeSut()

    const encryptSpy = jest.spyOn(encryptStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })

  // garantindo que o erro não vai ser tratado aqui(com try catch), e sim repassado para a presentation para ser tratado lá com o serverError()
  test('should throw if Encrypter throws', async () => {
    const { encryptStub, sut } = makeSut()

    // mockando para a dependencia do sut retornar uma execessão
    jest.spyOn(encryptStub, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    const promise = sut.add(accountData)
    await expect(promise).rejects.toThrow()
  })
})
