import { Encrypter } from "@/data/protocols/criptography/encrypt";
import { HashComparer } from "@/data/protocols/criptography/hash-comparer";
import { LoadAccountByEmailRepository } from "@/data/protocols/db/load-account-by-email-repository";
import { Authentication, AuthenticationModel } from "@/domain/usecases/authentication";

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository:LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer

  constructor(loadAccountByEmailRepository:LoadAccountByEmailRepository, hashComparer: HashComparer, private readonly encrypter: Encrypter,){
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
  }
  async auth (authentication: AuthenticationModel) : Promise<string>{
    const account = await this.loadAccountByEmailRepository.loadByEmail(authentication.email)
    if(account){
      await this.hashComparer.compare(authentication.password, account.password)

      await this.encrypter.encrypt(account.id)
    }
    
    return null
  }

}