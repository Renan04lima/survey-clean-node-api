import { LoadAccountByEmailRepository } from "@/data/protocols/db/load-account-by-email-repository";
import { Authentication, AuthenticationModel } from "@/domain/usecases/authentication";

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository:LoadAccountByEmailRepository
  constructor(loadAccountByEmailRepository:LoadAccountByEmailRepository){
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
  }
  async auth (authentication: AuthenticationModel) : Promise<string>{
    await this.loadAccountByEmailRepository.loadByEmail(authentication.email)
    return null
  }

}