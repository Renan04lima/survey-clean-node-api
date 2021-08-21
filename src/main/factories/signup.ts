import { EmailValidatorAdapter } from '@/utils/email-validator-adapter'
import SignUpController from '../../presentation/controller/signUp/signup'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account-repository/account'
import { Controller } from '@/presentation/protocols'
import { LogControllerDecorator } from '../decorators/logs'
import { LogMongoRepository } from '@/infra/db/mongodb/log-repository/log'
import { makeSignUpValidation } from './signup-validation'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const accountMongoRepository = new AccountMongoRepository()
  const logMongoRepository = new LogMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)

  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount, makeSignUpValidation())

  return new LogControllerDecorator(signUpController, logMongoRepository)
}
