import { AddAccount, AddAccountModel } from '@/domain/usecases/add-account'
import { AccountModel } from '@/domain/model/account'
import { Encrypter } from '@/data/protocols/encrypt'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)

    return new Promise(resolve => resolve(null))
  }
}
