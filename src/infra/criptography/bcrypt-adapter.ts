import bcrypt from 'bcrypt'
import { Hasher } from '@/data/protocols/criptography/hasher'
import { HashComparer } from '@/data/protocols/criptography/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt: number
  // NOTE - usado para não alterar a interface do Hasher, pois o salt é uma prop especifica do bcrypt
  constructor(salt: number) {
    this.salt = salt
  }

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)

    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
