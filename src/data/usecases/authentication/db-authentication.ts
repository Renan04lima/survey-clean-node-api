import { Encrypter } from "@/data/protocols/criptography/encrypt";
import { HashComparer } from "@/data/protocols/criptography/hash-comparer";
import { LoadAccountByEmailRepository } from "@/data/protocols/db/account/load-account-by-email-repository";
import { UpdateAccessTokenRepository } from "@/data/protocols/db/account/update-access-token-repository";
import { Authentication, AuthenticationModel } from "@/domain/usecases/authentication";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadAccountByEmailRepository:LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository){
  }
  
  async auth (authentication: AuthenticationModel) : Promise<string>{
    const account = await this.loadAccountByEmailRepository.loadByEmail(authentication.email)
    if(account){
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if(isValid){
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return accessToken
      }
    }
    
    return null
  }

}