import { hash, compare } from 'bcryptjs'

import { type HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { type HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'

export class BcryptHasher implements HashGenerator, HashComparer {
  private readonly HASH_SALT_LENGTH = 8

  async hash (plain: string): Promise<string> {
    return await hash(plain, this.HASH_SALT_LENGTH)
  }

  async compare (plain: string, hash: string): Promise<boolean> {
    return await compare(plain, hash)
  }
}
