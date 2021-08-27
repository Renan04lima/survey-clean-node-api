import bcrypt from 'bcrypt'
import { Encrypter } from '@/data/protocols/criptography/encrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number
  // NOTE - usado para não alterar a interface do Encrypter, pois o salt é uma prop especifica do bcrypt
  constructor(salt: number) {
    this.salt = salt
  }

  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)

    return hash
  }
}
