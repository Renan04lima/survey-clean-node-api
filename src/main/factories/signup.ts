import { EmailValidatorAdapter } from '@/utils/email-validator-adapter'
import SignUpController from '../../presentation/controller/signUp/signup'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const accountMongoRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)

  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
